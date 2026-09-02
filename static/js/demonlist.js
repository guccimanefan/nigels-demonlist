"use strict";
// -----------------------------------------------------------------------------
// Rendering for the Demonlist overview page and the individual demon page.
// Depends on data/config.js, data/demons.js and static/js/list-utils.js being
// loaded first. Classic script, no bundler - call the render functions inline
// from the page's own <script> block once the target elements exist in the
// DOM (see demonlist/index.html and demonlist/demon.html).
// -----------------------------------------------------------------------------

(function (DL) {
  // "2026-09-01" -> "September 1, 2026" (falls back to the raw string).
  DL.formatDate = function (iso) {
    var d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  // One <li> for a data/changelog.js item. `demonBase` is prepended to demon
  // links (e.g. "../demonlist/" from the /changelog/ page).
  function changelogItemHtml(item, demonBase) {
    var name = item.demon
      ? item.demonId && DL.demonById(item.demonId)
        ? '<a href="' + demonBase + DL.demonUrl(item.demonId) + '">' + DL.escapeHtml(item.demon) + "</a>"
        : "<b>" + DL.escapeHtml(item.demon) + "</b>"
      : "";
    var kind = item.kind || "note";
    var body;
    // the badge already says Added / Moved / Removed, so the body doesn't repeat it
    if (kind === "add") body = name + (item.at != null ? " at #" + item.at : "");
    else if (kind === "move") body = name + " from #" + item.from + " to #" + item.to;
    else if (kind === "remove") body = name + (item.from != null ? " (was #" + item.from + ")" : "");
    else body = "";
    if (item.text) body += (body ? " &mdash; " : "") + DL.escapeHtml(item.text);
    var labels = { add: "Added", move: "Moved", remove: "Removed", note: "Note" };
    return (
      '<li class="changelog-item changelog-' + kind + '">' +
        '<span class="changelog-badge">' + labels[kind] + "</span>" +
        "<span>" + body + "</span>" +
      "</li>"
    );
  }

  // Full changelog, one panel per dated entry. `demonBase` as above.
  DL.renderChangelog = function (root, demonBase) {
    demonBase = demonBase || "";
    var log = window.CHANGELOG || [];
    if (!log.length) {
      root.innerHTML = '<section class="panel fade"><p>Nothing logged yet.</p></section>';
      return;
    }
    root.innerHTML = log
      .map(function (entry) {
        return (
          '<section class="panel fade js-scroll-anim" data-anim="fade">' +
            '<div class="underlined"><h2>' + DL.escapeHtml(DL.formatDate(entry.date)) + "</h2></div>" +
            '<ul class="changelog-list">' +
              (entry.items || []).map(function (it) { return changelogItemHtml(it, demonBase); }).join("") +
            "</ul>" +
          "</section>"
        );
      })
      .join("");
  };

  DL._changelogItemHtml = changelogItemHtml;

  // The Main/Extended/Legacy dropdown tab bar (nav#lists), reused on both the
  // overview page and the demon detail page. `currentDemon` (optional) gets
  // the `.active` class in whichever dropdown it belongs to.
  DL.renderListNav = function (root, currentDemon) {
    var all = DL.sortedDemons();
    var main = all.filter(function (d) { return DL.tierOf(d.position) === "main"; });
    var extended = all.filter(function (d) { return DL.tierOf(d.position) === "extended"; });
    var legacy = all.filter(function (d) { return DL.tierOf(d.position) === "legacy"; });

    function group(id, label, demons, numbered, description) {
      var items = demons.map(function (d) {
        var active = currentDemon && currentDemon.id === d.id ? " active" : "";
        var display = numbered
          ? "#" + d.position + " - " + DL.escapeHtml(d.name)
          : DL.escapeHtml(d.name);
        return (
          '<li class="hover white' + active + '" title="#' + d.position + " - " + DL.escapeHtml(d.name) + '">' +
            '<a href="' + DL.demonUrl(d.id) + '">' + display + "<br><i>" + DL.escapeHtml(d.publisher) + "</i></a>" +
          "</li>"
        );
      });
      if (!items.length) items.push('<li class="hover white" style="cursor:default"><i>Nothing here yet</i></li>');

      return (
        "<div>" +
          '<div class="button white hover no-shadow js-toggle" data-toggle-group="0" onclick="DropDown.toggleDropDown(\'' + id + "')\">" + label + "</div>" +
          '<div class="see-through fade dropdown" id="' + id + '">' +
            '<div class="search js-search" style="margin:10px"><input placeholder="Filter..." type="text"></div>' +
            '<p style="margin:10px">' + description + "</p>" +
            '<ul class="flex wrap space">' + items.join("") + "</ul>" +
          "</div>" +
        "</div>"
      );
    }

    root.innerHTML =
      group("mainlist", "Main List", main, true, "The main section of the Demonlist.") +
      group("extended", "Extended List", extended, true, "Official extensions of the Main List. Only 100% completions count.") +
      (legacy.length ? group("legacy", "Legacy List", legacy, false, "Demons that have fallen off the list.") : "");
  };

  DL.demonPanelHtml = function (demon) {
    var req = demon.requirementPercent || 100;
    var fullScore = DL.scoreAt100(demon);
    var scoreText =
      req >= 100
        ? fullScore.toFixed(2) + " points"
        : DL.recordScore(demon, req).toFixed(2) +
          " (" + req + "%) &mdash; " + fullScore.toFixed(2) + " (100%) points";

    var recs = (demon.records || []).length;
    var recLine =
      recs > 1 ? '<div class="demon-panel-records">' + recs + " completions on the list</div>" : "";

    return (
      '<section class="panel fade flex mobile-col js-scroll-anim" data-anim="fade" style="overflow:hidden">' +
        DL.demonThumbHtml(demon, "demon-panel-thumb") +
        '<div class="flex demon-info" style="align-items:center">' +
          '<div class="demon-byline">' +
            '<h2 style="text-align:left;margin-bottom:0px"><a href="' + DL.demonUrl(demon.id) + '">#' + demon.position + " – " + DL.escapeHtml(demon.name) + "</a></h2>" +
            '<h3 style="text-align:left">published by ' + DL.creditLink(demon.publisher) + "</h3>" +
            '<div style="text-align:left;font-size:0.8em">' + scoreText + "</div>" +
            recLine +
          "</div>" +
        "</div>" +
      "</section>"
    );
  };

  DL.renderOverviewPanels = function (root) {
    var cutoff = window.SITE.extendedListSize || Infinity; // no Legacy tier -> every demon gets a panel
    var demons = DL.sortedDemons().filter(function (d) { return d.position <= cutoff; });
    if (!demons.length) {
      root.innerHTML = '<section class="panel fade"><p>No demons on the list yet.</p></section>';
      return;
    }
    root.innerHTML = demons.map(DL.demonPanelHtml).join("");
  };

  function sidebarPanel(id, heading, body) {
    return (
      '<section class="panel fade js-scroll-anim" data-anim="fade" id="' + id + '">' +
        '<div class="underlined"><h2>' + heading + "</h2></div>" +
        body +
      "</section>"
    );
  }

  DL.renderSidebar = function (root) {
    var cfg = window.SITE;
    var inDemonlist = location.pathname.indexOf("/demonlist/") !== -1;
    var guidelinesHref = inDemonlist ? "../guidelines/index.html" : "guidelines/index.html";
    var statsHref = inDemonlist ? "statsviewer.html" : "demonlist/statsviewer.html";
    var changelogHref = inDemonlist ? "../changelog/index.html" : "changelog/index.html";

    var demons = DL.sortedDemons();
    var players = DL.aggregatePlayers();
    var html = "";

    // --- List Editors / Helpers ---
    html += sidebarPanel(
      "editors",
      "List Editors",
      "<p>The people who keep the list in order. Poke one of them if a placement looks off or a record needs fixing.</p>" +
        (cfg.editors.length
          ? '<p class="staff-names">' +
              cfg.editors
                .map(function (e) {
                  return DL.escapeHtml(e.name) + (e.role ? " <i>(" + DL.escapeHtml(e.role) + ")</i>" : "");
                })
                .join(" &middot; ") +
              "</p>"
          : "<p><i>Not listed.</i></p>") +
        (cfg.helpers.length
          ? '<div class="underlined"><h2>List Helpers</h2></div>' +
            "<p>They help check records and progress submissions.</p>" +
            '<p class="staff-names">' +
              cfg.helpers.map(function (h) { return DL.escapeHtml(h.name); }).join(" &middot; ") +
            "</p>"
          : "")
    );

    // --- Statistics ---
    if (demons.length) {
      var mainCount = demons.filter(function (d) { return DL.tierOf(d.position) === "main"; }).length;
      var extendedCount = demons.filter(function (d) { return DL.tierOf(d.position) === "extended"; }).length;
      var legacyCount = demons.filter(function (d) { return DL.tierOf(d.position) === "legacy"; }).length;
      var recordCount = demons.reduce(function (n, d) { return n + (d.records || []).length; }, 0);
      var hardest = demons[0];
      var topBeater = players
        .slice()
        .sort(function (a, b) { return b.completed.length - a.completed.length; })[0];
      var totalScore = players.reduce(function (n, p) { return n + p.score; }, 0);

      function statRow(label, value) {
        return '<div class="stat-row"><span>' + label + "</span><b>" + value + "</b></div>";
      }

      html += sidebarPanel(
        "list-stats",
        "Statistics",
        statRow("Demons on the list", demons.length) +
          statRow(
            legacyCount ? "Main / Extended / Legacy" : "Main / Extended",
            mainCount + " / " + extendedCount + (legacyCount ? " / " + legacyCount : "")
          ) +
          statRow("Completions logged", recordCount) +
          statRow("Players ranked", players.length) +
          statRow(
            "Hardest demon",
            '<a href="' + DL.demonUrl(hardest.id) + '">' + DL.escapeHtml(hardest.name) + "</a>"
          ) +
          (topBeater
            ? statRow("Most completions", DL.escapeHtml(topBeater.name) + " (" + topBeater.completed.length + ")")
            : "") +
          statRow("Points on the board", totalScore.toFixed(0))
      );
    }

    // --- Top of the leaderboard ---
    if (players.length) {
      html += sidebarPanel(
        "top-players",
        "Top Players",
        '<ol class="mini-ranking">' +
          players
            .slice(0, 3)
            .map(function (p) {
              return (
                "<li>" +
                (p.nationality ? DL.flagSpan(p.nationality) : "") +
                '<a class="underdotted" href="' +
                statsHref +
                "?player=" +
                encodeURIComponent(p.name) +
                '">' +
                DL.escapeHtml(p.name) +
                "</a><span>" +
                p.score.toFixed(0) +
                "</span></li>"
              );
            })
            .join("") +
          "</ol>" +
          '<a class="blue hover button" href="' + statsHref + '">Full ranking &amp; map</a>'
      );
    }

    // --- Latest changes ---
    var log = window.CHANGELOG || [];
    if (log.length) {
      var latest = log[0];
      html += sidebarPanel(
        "changelog-teaser",
        "Latest changes",
        '<p class="changelog-teaser-date">' + DL.escapeHtml(DL.formatDate(latest.date)) + "</p>" +
          '<ul class="changelog-list">' +
            (latest.items || [])
              .slice(0, 2)
              .map(function (it) { return DL._changelogItemHtml(it, ""); })
              .join("") +
          "</ul>" +
          ((latest.items || []).length > 2
            ? '<p class="changelog-teaser-more">+' + ((latest.items || []).length - 2) + " more</p>"
            : "") +
          '<a class="blue hover button" href="' + changelogHref + '">Full changelog</a>'
      );
    }

    // --- Guidelines ---
    html += sidebarPanel(
      "rules",
      "Guidelines",
      "<p>How completions get recorded, what counts, and what isn't allowed. Worth a read before you submit a run.</p>" +
        '<a class="blue hover button" href="' + guidelinesHref + '">Read the guidelines</a>'
    );

    // --- Stats Viewer ---
    html += sidebarPanel(
      "stats",
      "Stats Viewer",
      "<p>Every player and country ranked by points, with an interactive world map. See who's on top and what everyone still has left to beat.</p>" +
        '<a class="blue hover button" href="' + statsHref + '">Open the stats viewer</a>'
    );

    // --- Discord ---
    if (cfg.discordInvite) {
      html += sidebarPanel(
        "discord",
        "Discord",
        "<p>Chat, submit records, and argue about placements with the rest of us.</p>" +
          '<a class="blue hover button" href="' +
          DL.escapeHtml(cfg.discordInvite) +
          '" target="_blank" rel="noopener">Join the Discord</a>'
      );
    }

    root.innerHTML = html;
  };

  function bylineHtml(demon) {
    var creators = demon.creators && demon.creators.length ? demon.creators : [demon.publisher];
    var publisher = demon.publisher;
    var verifier = demon.verifier || publisher;

    var parts = ["created by " + creators.map(DL.creditLink).join(", ")];
    if (creators.indexOf(publisher) === -1) parts.push("published by " + DL.creditLink(publisher));
    if (verifier !== publisher) parts.push("verified by " + DL.playerLink(verifier));

    return parts.join(", ");
  }

  // pointercrate-style Position History table, from DL.positionHistoryFor
  // (derived from data/changelog.js). Hidden entirely if there's nothing to show.
  function positionHistoryHtml(demon) {
    var rows = DL.positionHistoryFor(demon);
    if (!rows.length) return "";

    var body = rows
      .map(function (r) {
        var rowCls =
          r.delta === 0 ? "ph-add" : r.delta < 0 ? "ph-up" : "ph-down";
        var change =
          r.delta === 0
            ? '<span class="ph-change ph-flat">&ndash;</span>'
            : r.delta < 0
            ? '<span class="ph-change ph-rise">&#9650; ' + Math.abs(r.delta) + "</span>"
            : '<span class="ph-change ph-fall">&#9660; ' + r.delta + "</span>";
        return (
          '<tr class="' + rowCls + '">' +
            "<td>" + DL.escapeHtml(DL.formatDate(r.date)) + "</td>" +
            "<td>" + change + "</td>" +
            "<td>#" + r.position + "</td>" +
            "<td>" + DL.escapeHtml(r.reason) + "</td>" +
          "</tr>"
        );
      })
      .join("");

    return (
      '<section class="panel fade js-scroll-anim" data-anim="fade">' +
        '<div class="underlined pad"><h2>Position History</h2></div>' +
        '<table class="position-history"><tbody>' +
          '<tr><th class="blue">Date</th><th class="blue">Change</th>' +
          '<th class="blue">New Position</th><th class="blue">Reason</th></tr>' +
          body +
        "</tbody></table>" +
      "</section>"
    );
  }

  function recordsTableHtml(demon) {
    var records = (demon.records || []).slice().sort(function (a, b) {
      return b.progress - a.progress || a.player.localeCompare(b.player);
    });
    var oneHundred = records.filter(function (r) { return r.progress >= 100; }).length;
    var tier = DL.tierOf(demon.position);
    var req = demon.requirementPercent || 100;
    var reqText = tier === "extended" ? "100% required to qualify" : req + "% or better required to qualify";

    var body;
    if (!records.length) {
      body = "<h3>No records yet! Be the first to achieve one!</h3>";
    } else {
      body =
        "<table><tbody>" +
        '<tr><th class="blue"></th><th class="blue">Record Holder</th><th class="blue">Progress</th></tr>' +
        records.map(function (r) {
          var weight = r.progress >= 100 ? ' style="font-weight:bold"' : "";
          return (
            "<tr" + weight + "><td>" + DL.flagSpan(r.nationality) + "</td><td>" + DL.playerLink(r.player) +
            "</td><td>" + r.progress + "%</td></tr>"
          );
        }).join("") +
        "</tbody></table>";
    }

    return (
      '<section class="records panel fade js-scroll-anim" data-anim="fade">' +
        '<div class="underlined pad">' +
          "<h2>Records</h2>" +
          "<h3>" + reqText + "</h3>" +
          "<h4>" + records.length + " record" + (records.length === 1 ? "" : "s") + " registered, out of which " + oneHundred + " " + (oneHundred === 1 ? "is" : "are") + " 100%</h4>" +
        "</div>" +
        body +
      "</section>"
    );
  }

  DL.renderDemonDetail = function (root, demon) {
    var all = DL.sortedDemons();
    var idx = all.findIndex(function (d) { return d.id === demon.id; });
    var prev = idx > 0 ? all[idx - 1] : null;
    var next = idx < all.length - 1 ? all[idx + 1] : null;
    var tier = DL.tierOf(demon.position);
    var req = demon.requirementPercent || 100;

    var heading =
      '<h1 id="demon-heading" style="overflow:hidden">' +
      (prev ? '<a href="' + DL.demonUrl(prev.id) + '"><i class="fa fa-chevron-left" style="padding-right:5%"></i></a>' : "") +
      DL.escapeHtml(demon.name) +
      (next ? '<a href="' + DL.demonUrl(next.id) + '"><i class="fa fa-chevron-right" style="padding-left:5%"></i></a>' : "") +
      "</h1>";

    // Click-to-play poster instead of an always-on <iframe>: a YouTube embed
    // throws "configuration error 153" on a file:// page (no origin/referer),
    // and this site has to work double-clicked. On file:// the click opens
    // YouTube directly; when properly hosted it swaps in the real player.
    var videoHtml = "";
    if (demon.videoUrl) {
      var embed = DL.embedVideo(demon.videoUrl);
      if (embed && embed.url) {
        var poster = demon.thumbnailUrl
          ? ' style="background-image:url(' + DL.escapeHtml(demon.thumbnailUrl) + ')"'
          : "";
        var cardCls = demon.thumbnailUrl ? "" : " demon-card " + DL.difficultyClass(demon.difficulty);
        var cardText = demon.thumbnailUrl
          ? ""
          : '<span class="demon-card-name">' + DL.escapeHtml(demon.name) + "</span>" +
            '<span class="demon-card-diff">' + DL.escapeHtml(DL.difficultyLabel(demon.difficulty)) + "</span>";
        videoHtml =
          '<div class="demon-video js-demon-video' + cardCls + '"' + poster +
            ' role="button" tabindex="0" aria-label="Play showcase video"' +
            ' data-embed="' + DL.escapeHtml(embed.url) + '"' +
            ' data-watch="' + DL.escapeHtml(demon.videoUrl) + '">' +
            cardText +
            '<span class="demon-video-play"></span>' +
          "</div>" +
          '<p class="demon-video-link"><a class="link" href="' + DL.escapeHtml(demon.videoUrl) +
            '" target="_blank" rel="noopener">Watch on YouTube</a></p>';
      } else {
        videoHtml =
          '<p class="underlined pad"><a class="link" href="' + DL.escapeHtml(demon.videoUrl) + '" target="_blank" rel="noopener">Watch the showcase video</a></p>';
      }
    }

    var infoBits = [];
    infoBits.push("<span><b>Tier</b><br>" + DL.tierLabel(tier) + "</span>");
    if (demon.difficulty) infoBits.push("<span><b>Difficulty</b><br>" + DL.escapeHtml(DL.difficultyLabel(demon.difficulty)) + "</span>");
    if (demon.levelId) infoBits.push("<span><b>Level ID</b><br>" + DL.escapeHtml(demon.levelId) + "</span>");
    if (tier !== "legacy") {
      infoBits.push("<span><b>Demonlist score</b><br>" + DL.scoreAt100(demon).toFixed(2) + "</span>");
      if (req < 100) {
        infoBits.push("<span><b>Score at " + req + "%</b><br>" + DL.recordScore(demon, req).toFixed(2) + "</span>");
      }
    }

    root.innerHTML =
      '<section class="panel fade js-scroll-anim" data-anim="fade">' +
        '<div class="underlined">' + heading + "<h3>" + bylineHtml(demon) + "</h3></div>" +
        (demon.description ? '<div class="underlined pad"><q>' + DL.escapeHtml(demon.description) + "</q></div>" : "") +
        videoHtml +
        '<div class="underlined pad flex wrap" id="level-info">' + infoBits.join("") + "</div>" +
      "</section>" +
      positionHistoryHtml(demon) +
      recordsTableHtml(demon);

    var videoEl = root.querySelector(".js-demon-video");
    if (videoEl) {
      var playVideo = function () {
        if (location.protocol === "file:") {
          window.open(videoEl.dataset.watch, "_blank", "noopener");
          return;
        }
        var frame = document.createElement("iframe");
        frame.className = "demon-video";
        frame.title = "Showcase video";
        frame.setAttribute("allow", "autoplay; encrypted-media; fullscreen; picture-in-picture");
        frame.setAttribute("allowfullscreen", "");
        frame.src =
          videoEl.dataset.embed + (videoEl.dataset.embed.indexOf("?") === -1 ? "?" : "&") + "autoplay=1";
        videoEl.replaceWith(frame);
      };
      videoEl.addEventListener("click", playVideo);
      videoEl.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          playVideo();
        }
      });
    }
  };
})(window.DL);
