"use strict";
// -----------------------------------------------------------------------------
// LIST CHANGELOG - newest entry first.
//
// Add an entry whenever the list changes: a demon added / moved / removed, a
// scoring or tier tweak, anything worth a note. Rendered on /changelog/ and
// teased in the demonlist sidebar.
//
//   { date: "YYYY-MM-DD", items: [ ...one or more of the below... ] }
//
//   { kind: "add",    demon: "Name", demonId: 12345, at: 4,   text?: "why" }
//   { kind: "move",   demon: "Name", demonId: 12345, from: 6, to: 3 }
//   { kind: "remove", demon: "Name",                 from: 40, text?: "why" }
//   { kind: "note",   text: "free-form note" }
//
// demonId is optional (links to the demon page when it's present and the demon
// is still on the list). text is an optional extra clause on any kind.
// -----------------------------------------------------------------------------

window.CHANGELOG = [
  {
    date: "2026-09-01",
    items: [
      {
        kind: "note",
        text: "List created - 65 demons imported from our gdladder.com profiles (every non-platformer completion), ranked hardest-first by GD Demon Ladder's difficulty rating.",
      },
      {
        kind: "note",
        text: "Tiers set: the top 20 are the Main List and everything after that is the Extended List. No Legacy tier.",
      },
      {
        kind: "note",
        text: "Every demon now has its GD Demon Ladder showcase video and thumbnail.",
      },
    ],
  },
];
