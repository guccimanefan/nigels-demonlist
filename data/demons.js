"use strict";
// -----------------------------------------------------------------------------
// Real data for Nigel, Juice, Jack, xPapita, and jd. Levels/records sourced
// from GD Demon Ladder (gdladder.com) on 2026-09-01 - see the comment this
// replaced (in your editor's history / git, if you keep one) for exact URLs.
// Level descriptions are the real in-game descriptions, pulled from gdbrowser
// (gdbrowser.com/api/level/<id>) on 2026-09-01. RobTop's three official
// levels (Clubstep, Theory of Everything 2, Deadlocked) aren't served by
// that API (they ship with the game client, not the level server), so their
// description is null rather than guessed.
//
// publisher/creators = the level's real GD creator. 'verifier' is
// repurposed to mean "who of us cleared it first": Nigel wins any tie,
// else Juice (per instructions). Four levels have more than one of us on
// them for that reason: Deadlocked, Nine Circles, Magma Bound, phjork.
//
// nationality/subdivision: Nigel = US/IL (Illinois), Juice = US/IN
// (Indiana), everyone else = US with no subdivision, as given.
//
// position is ranked by gdladder's own difficulty *rating* (the number,
// hardest first). `difficulty` is gdladder's categorical demon tier:
// "Easy" | "Medium" | "Hard" | "Insane" | "Extreme" | "Official" (RobTop's
// three).
//
// videoUrl / thumbnailUrl: the level's GDDL "Showcase" video (gdladder.com
// /api/levels/<id> -> .Showcase, a YouTube id) and that video's YouTube still
// (maxresdefault, or hqdefault for the few with no maxres), pulled 2026-09-01.
// All 65 had a showcase. If a future level has none, leave thumbnailUrl null
// and the panel falls back to a difficulty-coloured name card.
// -----------------------------------------------------------------------------

window.DEMONS = [
  {
    "id": 111751101,
    "position": 1,
    "name": "Ghoul",
    "difficulty": "Extreme",
    "rating": 30.45,
    "publisher": "XavT",
    "creators": [
      "XavT"
    ],
    "verifier": "Juice",
    "videoUrl": "https://www.youtube.com/watch?v=Gs_nUtJ-tLs",
    "thumbnailUrl": "https://i.ytimg.com/vi/Gs_nUtJ-tLs/maxresdefault.jpg",
    "levelId": 111751101,
    "description": "(No description provided)",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Juice",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IN"
      }
    ]
  },
  {
    "id": 10565740,
    "position": 2,
    "name": "Bloodbath",
    "difficulty": "Extreme",
    "rating": 23.98,
    "publisher": "Riot",
    "creators": [
      "Riot"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=p8uIkSxCZAU",
    "thumbnailUrl": "https://i.ytimg.com/vi/p8uIkSxCZAU/maxresdefault.jpg",
    "levelId": 10565740,
    "description": "Whose blood will be spilt in the Bloodbath? Who will the victors be? How many will survive? Good luck...",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 93752979,
    "position": 3,
    "name": "cytokinesis",
    "difficulty": "Extreme",
    "rating": 23.88,
    "publisher": "cherryteam",
    "creators": [
      "cherryteam"
    ],
    "verifier": "Juice",
    "videoUrl": "https://www.youtube.com/watch?v=fIlZb48Yyhs",
    "thumbnailUrl": "https://i.ytimg.com/vi/fIlZb48Yyhs/maxresdefault.jpg",
    "levelId": 93752979,
    "description": "the OTHERS awaken our becoming | hosted by sauzzeth",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Juice",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IN"
      }
    ]
  },
  {
    "id": 89976481,
    "position": 4,
    "name": "court circuit",
    "difficulty": "Extreme",
    "rating": 22.67,
    "publisher": "Fafenel",
    "creators": [
      "Fafenel"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=PWHoCIrdY7o",
    "thumbnailUrl": "https://i.ytimg.com/vi/PWHoCIrdY7o/maxresdefault.jpg",
    "levelId": 89976481,
    "description": "Huge thanks to Aymen, Agar, DraxitIII, Litoks, Regnom, Nexo, Shadowhisky1374, Spatule and M435J for playtesting ! Verified by DraxitIII, update verified by LastPrismAlex !",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 114933189,
    "position": 5,
    "name": "Through The Decay",
    "difficulty": "Extreme",
    "rating": 20.08,
    "publisher": "sparktwo",
    "creators": [
      "sparktwo"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=0xrI_Wv-lfg",
    "thumbnailUrl": "https://i.ytimg.com/vi/0xrI_Wv-lfg/hqdefault.jpg",
    "levelId": 114933189,
    "description": "Insane/Extreme demon made in 2 hours. Inspired by Forest Temple and R3XX3R. Not affiliated with The Fog.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 61137742,
    "position": 6,
    "name": "Leyak",
    "difficulty": "Insane",
    "rating": 18.14,
    "publisher": "EnZore",
    "creators": [
      "EnZore"
    ],
    "verifier": "Juice",
    "videoUrl": "https://www.youtube.com/watch?v=50ri-NLjnSU",
    "thumbnailUrl": "https://i.ytimg.com/vi/50ri-NLjnSU/maxresdefault.jpg",
    "levelId": 61137742,
    "description": "a Sorcerer who has ability to shape shift into a Demon and serve Rangda [Verified by BoldStep] [Layout by Marwec and ILRELL]",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Juice",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IN"
      }
    ]
  },
  {
    "id": 37259527,
    "position": 7,
    "name": "BuTiTi II",
    "difficulty": "Insane",
    "rating": 17.79,
    "publisher": "JonathanGD",
    "creators": [
      "JonathanGD"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=aw9xw7WiLVo",
    "thumbnailUrl": "https://i.ytimg.com/vi/aw9xw7WiLVo/maxresdefault.jpg",
    "levelId": 37259527,
    "description": "Welcome to the beautiful future! | WARNING! This level contains dankest memes and vaporwave. | Verified by mbed | Updated boss color",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 126213470,
    "position": 8,
    "name": "Nilscapes",
    "difficulty": "Insane",
    "rating": 17.02,
    "publisher": "L413",
    "creators": [
      "L413"
    ],
    "verifier": "Jack",
    "videoUrl": "https://www.youtube.com/watch?v=zIbardyGrRk",
    "thumbnailUrl": "https://i.ytimg.com/vi/zIbardyGrRk/maxresdefault.jpg",
    "levelId": 126213470,
    "description": "ARE YOU SURE THIS LINE IS CLEAN",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Jack",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ]
  },
  {
    "id": 32885972,
    "position": 9,
    "name": "Dark Travel",
    "difficulty": "Insane",
    "rating": 16.94,
    "publisher": "JonathanGD",
    "creators": [
      "JonathanGD"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=qAjYniI8OLk",
    "thumbnailUrl": "https://i.ytimg.com/vi/qAjYniI8OLk/maxresdefault.jpg",
    "levelId": 32885972,
    "description": "The darkness lingers. Be careful who you trust... | My first 2.1 level | Viprin CC8 Entry | 208k objects | Length: 6:14 | Password = 963041",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 4706930,
    "position": 10,
    "name": "Supersonic",
    "difficulty": "Insane",
    "rating": 16.88,
    "publisher": "ZenthicAlpha",
    "creators": [
      "ZenthicAlpha"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=KUItyH1A6s4",
    "thumbnailUrl": "https://i.ytimg.com/vi/KUItyH1A6s4/maxresdefault.jpg",
    "levelId": 4706930,
    "description": "Megacollab by Glitter, Jeyzor, Sumsar, xcy-7, Daddepro, Evasium, Gboy, Viprin and me! Updated to add coins.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 59858021,
    "position": 11,
    "name": "Dream Travel",
    "difficulty": "Insane",
    "rating": 16.79,
    "publisher": "SuprianGD",
    "creators": [
      "SuprianGD"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=d5SobOSIriA",
    "thumbnailUrl": "https://i.ytimg.com/vi/d5SobOSIriA/maxresdefault.jpg",
    "levelId": 59858021,
    "description": "Enjoy a new trip you dream of, different places and references| 5 months of creation|7:30 min| 294K Obj| 99!??| Verified: ItsAdvyStyles",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 7054561,
    "position": 12,
    "name": "Poltergeist",
    "difficulty": "Insane",
    "rating": 15.94,
    "publisher": "Andromeda GMD",
    "creators": [
      "Andromeda GMD"
    ],
    "verifier": "Jack",
    "videoUrl": "https://www.youtube.com/watch?v=Amyhrr_faUg",
    "thumbnailUrl": "https://i.ytimg.com/vi/Amyhrr_faUg/maxresdefault.jpg",
    "levelId": 7054561,
    "description": "Poltergeist by Andromeda",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Jack",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ]
  },
  {
    "id": 56568010,
    "position": 13,
    "name": "Magma Bound",
    "difficulty": "Insane",
    "rating": 15.77,
    "publisher": "ScorchVx",
    "creators": [
      "ScorchVx"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=B3C6XVjpSJ4",
    "thumbnailUrl": "https://i.ytimg.com/vi/B3C6XVjpSJ4/maxresdefault.jpg",
    "levelId": 56568010,
    "description": "This took WAAAY longer than it should've.... like the rest of my levels.... I put my heart and soul into this so I hope you guys enjoy :) ",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      },
      {
        "player": "Jack",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ]
  },
  {
    "id": 4545425,
    "position": 14,
    "name": "Stalemate",
    "difficulty": "Insane",
    "rating": 15.19,
    "publisher": "Nox",
    "creators": [
      "Nox"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=rtm0flhztcU",
    "thumbnailUrl": "https://i.ytimg.com/vi/rtm0flhztcU/maxresdefault.jpg",
    "levelId": 4545425,
    "description": "Wow. This was tough to beat. First level with this song though!",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 43945511,
    "position": 15,
    "name": "Game Time",
    "difficulty": "Insane",
    "rating": 15.06,
    "publisher": "SimilarAMZ",
    "creators": [
      "SimilarAMZ"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=bkzJAmkYYIw",
    "thumbnailUrl": "https://i.ytimg.com/vi/bkzJAmkYYIw/maxresdefault.jpg",
    "levelId": 43945511,
    "description": "I finally finished this level! I used 79983objs and 999IDs...Pass is 643344,please enjoy!But I recommend doing practice mode.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 11402965,
    "position": 16,
    "name": "Forest Temple",
    "difficulty": "Hard",
    "rating": 13.96,
    "publisher": "Michigun",
    "creators": [
      "Michigun"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=ZKT1_Mq7hD0",
    "thumbnailUrl": "https://i.ytimg.com/vi/ZKT1_Mq7hD0/maxresdefault.jpg",
    "levelId": 11402965,
    "description": "You might get lost in the woods...",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 44062068,
    "position": 17,
    "name": "Future Funk",
    "difficulty": "Hard",
    "rating": 12.96,
    "publisher": "JonathanGD",
    "creators": [
      "JonathanGD"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=2CZM4Oi_hdA",
    "thumbnailUrl": "https://i.ytimg.com/vi/2CZM4Oi_hdA/maxresdefault.jpg",
    "levelId": 44062068,
    "description": "Remember when I said \"the future will be beautiful\"? Well, here it is again! A remake of Clutterfunk & High Life mixed into one awesomeness!",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 4284013,
    "position": 18,
    "name": "Nine Circles",
    "difficulty": "Hard",
    "rating": 11.15,
    "publisher": "Zobros",
    "creators": [
      "Zobros"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=dOdPoU1ncOc",
    "thumbnailUrl": "https://i.ytimg.com/vi/dOdPoU1ncOc/maxresdefault.jpg",
    "levelId": 4284013,
    "description": "Easy",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      },
      {
        "player": "jd",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ]
  },
  {
    "id": 104968496,
    "position": 19,
    "name": "Tidal Line",
    "difficulty": "Hard",
    "rating": 10.23,
    "publisher": "Sp4rce",
    "creators": [
      "Sp4rce"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=cfXQ1ZrKiNY",
    "thumbnailUrl": "https://i.ytimg.com/vi/cfXQ1ZrKiNY/maxresdefault.jpg",
    "levelId": 104968496,
    "description": "175k Obj solo level, a Dancing Line version of Tidal Wave! Original level built by OniLink & More. Tap to change direction! Verified by: NatikosOriginal",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 102343052,
    "position": 20,
    "name": "Space Invaders",
    "difficulty": "Hard",
    "rating": 10.21,
    "publisher": "DeeperSpace",
    "creators": [
      "DeeperSpace"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=mUNDM2q7u0s",
    "thumbnailUrl": "https://i.ytimg.com/vi/mUNDM2q7u0s/maxresdefault.jpg",
    "levelId": 102343052,
    "description": "Level 8 in Geometry Dash DeeperSpace (Created by Manix648 and LazerBlitz)",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 96096712,
    "position": 21,
    "name": "Entropic Dreams",
    "difficulty": "Hard",
    "rating": 9.94,
    "publisher": "LepszyGD",
    "creators": [
      "LepszyGD"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=a_2jxOZ8YBM",
    "thumbnailUrl": "https://i.ytimg.com/vi/a_2jxOZ8YBM/maxresdefault.jpg",
    "levelId": 96096712,
    "description": "My first completed level, spend over 50hrs, it was a learning experience. GLHF Thanks ROB for my frist rate.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 47611766,
    "position": 22,
    "name": "Biru",
    "difficulty": "Medium",
    "rating": 9.86,
    "publisher": "JonathanGD",
    "creators": [
      "JonathanGD"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=IHhftbiGHYg",
    "thumbnailUrl": "https://i.ytimg.com/vi/IHhftbiGHYg/maxresdefault.jpg",
    "levelId": 47611766,
    "description": "Full version is finally here! Big thanks to Viprin for giving me 1st place in Viprin's CC9 (unknown) | 116500 objects | 5 min 35 sec | OwO",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 69087510,
    "position": 23,
    "name": "evolutionary theory",
    "difficulty": "Medium",
    "rating": 7.84,
    "publisher": "MAYEROSA",
    "creators": [
      "MAYEROSA"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=x_1VmORwhYY",
    "thumbnailUrl": "https://i.ytimg.com/vi/x_1VmORwhYY/maxresdefault.jpg",
    "levelId": 69087510,
    "description": "In a scientific and historical perspective of the \"EVOLUTION\" of our existence and its possible future, I finally present my 5-minute masterpiece. I hope you like it.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 40202837,
    "position": 24,
    "name": "Rising Down",
    "difficulty": "Medium",
    "rating": 6.94,
    "publisher": "Small",
    "creators": [
      "Small"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=tu5ZOPizlj8",
    "thumbnailUrl": "https://i.ytimg.com/vi/tu5ZOPizlj8/maxresdefault.jpg",
    "levelId": 40202837,
    "description": "For Krazyman50 =)",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 118509879,
    "position": 25,
    "name": "Skeletal Shenanigans",
    "difficulty": "Medium",
    "rating": 6.66,
    "publisher": "YoReid",
    "creators": [
      "YoReid"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=IOkGkvUm4c8",
    "thumbnailUrl": "https://i.ytimg.com/vi/IOkGkvUm4c8/maxresdefault.jpg",
    "levelId": 118509879,
    "description": "TRAVELLER BEWARE, YOU'RE IN FOR A SCARE!",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 61417747,
    "position": 26,
    "name": "potal",
    "difficulty": "Medium",
    "rating": 6.38,
    "publisher": "Sillow",
    "creators": [
      "Sillow"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=ILkOvJ8CrnM",
    "thumbnailUrl": "https://i.ytimg.com/vi/ILkOvJ8CrnM/maxresdefault.jpg",
    "levelId": 61417747,
    "description": "they are not your frends (ldm increases dark part brightness)",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 17924880,
    "position": 27,
    "name": "Lonely travel",
    "difficulty": "Medium",
    "rating": 6.23,
    "publisher": "FunnyGame",
    "creators": [
      "FunnyGame"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=OqqCP10Qso0",
    "thumbnailUrl": "https://i.ytimg.com/vi/OqqCP10Qso0/maxresdefault.jpg",
    "levelId": 17924880,
    "description": "Useless longest level",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 10972106,
    "position": 28,
    "name": "Solar Circles",
    "difficulty": "Medium",
    "rating": 5.92,
    "publisher": "D4rkGryf",
    "creators": [
      "D4rkGryf"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=zsdXcOydyAg",
    "thumbnailUrl": "https://i.ytimg.com/vi/zsdXcOydyAg/maxresdefault.jpg",
    "levelId": 10972106,
    "description": "ITS FINALLY HERE !!",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 34085027,
    "position": 29,
    "name": "B",
    "difficulty": "Medium",
    "rating": 5.81,
    "publisher": "motleyorc",
    "creators": [
      "motleyorc"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=ohKPqGxotao",
    "thumbnailUrl": "https://i.ytimg.com/vi/ohKPqGxotao/maxresdefault.jpg",
    "levelId": 34085027,
    "description": "Buzz Buzz, an incredible collab between me and ScorchVx, dedicated to Serponge, PanMan, and all of my wonderful viewers!",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 95683886,
    "position": 30,
    "name": "penguin industries",
    "difficulty": "Medium",
    "rating": 5.31,
    "publisher": "Unknown1276",
    "creators": [
      "Unknown1276"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=KygTJnyym7o",
    "thumbnailUrl": "https://i.ytimg.com/vi/KygTJnyym7o/hqdefault.jpg",
    "levelId": 95683886,
    "description": "small update, fixed some stuff around the second ball, mostly adding more spikes/adding hitboxes for certain structures.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 220369,
    "position": 31,
    "name": "Theory of Jumping",
    "difficulty": "Medium",
    "rating": 4.77,
    "publisher": "Unknown",
    "creators": [
      "Unknown"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=3qdHyNAoUs8",
    "thumbnailUrl": "https://i.ytimg.com/vi/3qdHyNAoUs8/maxresdefault.jpg",
    "levelId": 220369,
    "description": "Level 3",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 3,
    "position": 32,
    "name": "Deadlocked",
    "difficulty": "Official",
    "rating": 4.68,
    "publisher": "RobTop",
    "creators": [
      "RobTop"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=reZj2Xbt05Q",
    "thumbnailUrl": "https://i.ytimg.com/vi/reZj2Xbt05Q/maxresdefault.jpg",
    "levelId": 3,
    "description": null,
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      },
      {
        "player": "xPapita",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ]
  },
  {
    "id": 2997354,
    "position": 33,
    "name": "DeCode",
    "difficulty": "Easy",
    "rating": 4.11,
    "publisher": "Rek3dge",
    "creators": [
      "Rek3dge"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=IRTQZZ502J0",
    "thumbnailUrl": "https://i.ytimg.com/vi/IRTQZZ502J0/maxresdefault.jpg",
    "levelId": 2997354,
    "description": "(No description provided)",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 8660411,
    "position": 34,
    "name": "Death Moon",
    "difficulty": "Easy",
    "rating": 3.81,
    "publisher": "Caustic",
    "creators": [
      "Caustic"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=_i1X9uFYxVE",
    "thumbnailUrl": "https://i.ytimg.com/vi/_i1X9uFYxVE/maxresdefault.jpg",
    "levelId": 8660411,
    "description": "Song by SHK",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 63277477,
    "position": 35,
    "name": "well being spot",
    "difficulty": "Easy",
    "rating": 3.64,
    "publisher": "2003devin",
    "creators": [
      "2003devin"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=BmczDZZTvE8",
    "thumbnailUrl": "https://i.ytimg.com/vi/BmczDZZTvE8/maxresdefault.jpg",
    "levelId": 63277477,
    "description": "i had a dream",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 111286661,
    "position": 36,
    "name": "MUNDUS SANGUINANS",
    "difficulty": "Easy",
    "rating": 3.23,
    "publisher": "1MadJack1",
    "creators": [
      "1MadJack1"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=yEHFPethK5w",
    "thumbnailUrl": "https://i.ytimg.com/vi/yEHFPethK5w/maxresdefault.jpg",
    "levelId": 111286661,
    "description": "Endure the bleeding world.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 7116121,
    "position": 37,
    "name": "Problematic",
    "difficulty": "Easy",
    "rating": 3.12,
    "publisher": "Dhafin",
    "creators": [
      "Dhafin"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=pZlQMTCgY6E",
    "thumbnailUrl": "https://i.ytimg.com/vi/pZlQMTCgY6E/maxresdefault.jpg",
    "levelId": 7116121,
    "description": "Inspired by Nine Circles and Fairydust. A fun DEMON stage! Pass on my channel!",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 90475473,
    "position": 38,
    "name": "Change of Scene",
    "difficulty": "Easy",
    "rating": 3.04,
    "publisher": "bli",
    "creators": [
      "bli"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=alafxkFTprU",
    "thumbnailUrl": "https://i.ytimg.com/vi/alafxkFTprU/maxresdefault.jpg",
    "levelId": 90475473,
    "description": "Discord Gauntlet Contest entry, enjoy. You can find the full showcase with all coins on my yt channel. (2/2024 updated to fix various bugs related to 2.2)",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 2,
    "position": 39,
    "name": "Theory of Everything 2",
    "difficulty": "Official",
    "rating": 3.04,
    "publisher": "RobTop",
    "creators": [
      "RobTop"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=1YI4oUUiV80",
    "thumbnailUrl": "https://i.ytimg.com/vi/1YI4oUUiV80/maxresdefault.jpg",
    "levelId": 2,
    "description": null,
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 77292103,
    "position": 40,
    "name": "White Space",
    "difficulty": "Easy",
    "rating": 2.89,
    "publisher": "Xender Game",
    "creators": [
      "Xender Game"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=1O0d1A6GuSA",
    "thumbnailUrl": "https://i.ytimg.com/vi/1O0d1A6GuSA/maxresdefault.jpg",
    "levelId": 77292103,
    "description": "Memories and Reality, are only ONE space, in between...",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 14850167,
    "position": 41,
    "name": "Horizon",
    "difficulty": "Easy",
    "rating": 2.89,
    "publisher": "Mylon",
    "creators": [
      "Mylon"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=V3nqPzwHOPU",
    "thumbnailUrl": "https://i.ytimg.com/vi/V3nqPzwHOPU/maxresdefault.jpg",
    "levelId": 14850167,
    "description": "...",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 14000484,
    "position": 42,
    "name": "Retro Circles",
    "difficulty": "Easy",
    "rating": 2.89,
    "publisher": "Nacho21",
    "creators": [
      "Nacho21"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=yVxKTQPzyus",
    "thumbnailUrl": "https://i.ytimg.com/vi/yVxKTQPzyus/maxresdefault.jpg",
    "levelId": 14000484,
    "description": "\"Nine Circles\" retro. Mi primera joya en mi carrera. Practica bien el nivel y buena suerte.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 9864147,
    "position": 43,
    "name": "Space Circles",
    "difficulty": "Easy",
    "rating": 2.88,
    "publisher": "SUOMI",
    "creators": [
      "SUOMI"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=SSeNcY2s_ug",
    "thumbnailUrl": "https://i.ytimg.com/vi/SSeNcY2s_ug/maxresdefault.jpg",
    "levelId": 9864147,
    "description": "Updated Version - Video & Password on My YouTube channel:   Geometry Dash Suomi",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 1,
    "position": 44,
    "name": "Clubstep",
    "difficulty": "Official",
    "rating": 2.83,
    "publisher": "RobTop",
    "creators": [
      "RobTop"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=gok5ShDXxg4",
    "thumbnailUrl": "https://i.ytimg.com/vi/gok5ShDXxg4/maxresdefault.jpg",
    "levelId": 1,
    "description": null,
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 184880,
    "position": 45,
    "name": "Ruined Planet",
    "difficulty": "Easy",
    "rating": 2.77,
    "publisher": "Unknown",
    "creators": [
      "Unknown"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=b0R2QrkSLTU",
    "thumbnailUrl": "https://i.ytimg.com/vi/b0R2QrkSLTU/maxresdefault.jpg",
    "levelId": 184880,
    "description": "Come to GW cafe!!",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 82804029,
    "position": 46,
    "name": "Endless Descent",
    "difficulty": "Easy",
    "rating": 2.71,
    "publisher": "Ph4lip",
    "creators": [
      "Ph4lip"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=GD7qnGoFm4w",
    "thumbnailUrl": "https://i.ytimg.com/vi/GD7qnGoFm4w/maxresdefault.jpg",
    "levelId": 82804029,
    "description": "To the far reaches of the Abyss you descend, knowing you will never return. Based on the anime Made In Abyss. Uses Nong [Endless Embrace - Myth & Roid]",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 1347537,
    "position": 47,
    "name": "invisible clubstep",
    "difficulty": "Easy",
    "rating": 2.61,
    "publisher": "Unknown",
    "creators": [
      "Unknown"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=9UDKGs6-FQ8",
    "thumbnailUrl": "https://i.ytimg.com/vi/9UDKGs6-FQ8/maxresdefault.jpg",
    "levelId": 1347537,
    "description": "SORRY THERE WAS A 48 PROCENT BUG NOW IS FIXED",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 49901047,
    "position": 48,
    "name": "End Line",
    "difficulty": "Easy",
    "rating": 1.99,
    "publisher": "dongchi",
    "creators": [
      "dongchi"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=HakhgDYYnk0",
    "thumbnailUrl": "https://i.ytimg.com/vi/HakhgDYYnk0/hqdefault.jpg",
    "levelId": 49901047,
    "description": "My first 2.1 map! I don't wanna get featured. I just want to make maps what I want!(like this...) Password is 026000!(Fixed 144hz bug)",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 13037894,
    "position": 49,
    "name": "infinite circles",
    "difficulty": "Easy",
    "rating": 1.97,
    "publisher": "startor",
    "creators": [
      "startor"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=xsiaAAqryKY",
    "thumbnailUrl": "https://i.ytimg.com/vi/xsiaAAqryKY/maxresdefault.jpg",
    "levelId": 13037894,
    "description": "8)",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 57012656,
    "position": 50,
    "name": "Ship",
    "difficulty": "Easy",
    "rating": 1.92,
    "publisher": "SerpTop",
    "creators": [
      "SerpTop"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=9k7_DTIE9x4",
    "thumbnailUrl": "https://i.ytimg.com/vi/9k7_DTIE9x4/hqdefault.jpg",
    "levelId": 57012656,
    "description": "An ultracollab featuring over 80 participants with over 90k objects . Big thanks to MarkyDash for helping me host. Pass is 020200, enjoy!",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 89886591,
    "position": 51,
    "name": "iSpyWithMyLittleEye",
    "difficulty": "Easy",
    "rating": 1.87,
    "publisher": "Voxicat",
    "creators": [
      "Voxicat"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=Ow7nDnZTbDw",
    "thumbnailUrl": "https://i.ytimg.com/vi/Ow7nDnZTbDw/maxresdefault.jpg",
    "levelId": 89886591,
    "description": "You feel an evil presence watching you...",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 28352064,
    "position": 52,
    "name": "The Farewell",
    "difficulty": "Easy",
    "rating": 1.78,
    "publisher": "JonathanGD",
    "creators": [
      "JonathanGD"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=5UGP2gAbaXk",
    "thumbnailUrl": "https://i.ytimg.com/vi/5UGP2gAbaXk/maxresdefault.jpg",
    "levelId": 28352064,
    "description": "This level was made to say goodbye to Update 2.0 in Geometry Dash. 2.0 was an awesome update! I loved it! It brings so many possibilities...",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 76582313,
    "position": 53,
    "name": "The Long Walk Home",
    "difficulty": "Easy",
    "rating": 1.72,
    "publisher": "Renn241",
    "creators": [
      "Renn241"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=jPhwXXj4QQw",
    "thumbnailUrl": "https://i.ytimg.com/vi/jPhwXXj4QQw/maxresdefault.jpg",
    "levelId": 76582313,
    "description": "11m 20s solo demon... It was quite the journey building this. Verified by DrCuber",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 848722,
    "position": 54,
    "name": "Lights And Thunder",
    "difficulty": "Easy",
    "rating": 1.62,
    "publisher": "Lyod",
    "creators": [
      "Lyod"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=Ru4Ut2IXSqE",
    "thumbnailUrl": "https://i.ytimg.com/vi/Ru4Ut2IXSqE/maxresdefault.jpg",
    "levelId": 848722,
    "description": "First on 1.7! Remixes free and open! Good Luck and Have Fun!",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 80790301,
    "position": 55,
    "name": "Permafrost Mountain",
    "difficulty": "Easy",
    "rating": 1.59,
    "publisher": "5ta1ker",
    "creators": [
      "5ta1ker"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=PHgpHbhG37w",
    "thumbnailUrl": "https://i.ytimg.com/vi/PHgpHbhG37w/hqdefault.jpg",
    "levelId": 80790301,
    "description": "Mountains hide many secrets...                     but do you dare to find them all...",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 127078077,
    "position": 56,
    "name": "Volcano",
    "difficulty": "Easy",
    "rating": 1.24,
    "publisher": "seannnn",
    "creators": [
      "seannnn"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=T1KaQ-WQRVo",
    "thumbnailUrl": "https://i.ytimg.com/vi/T1KaQ-WQRVo/maxresdefault.jpg",
    "levelId": 127078077,
    "description": "ts hot // best level, rate 10* easy demon",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 56587109,
    "position": 57,
    "name": "phjork",
    "difficulty": "Easy",
    "rating": 1.2,
    "publisher": "cerufiffy",
    "creators": [
      "cerufiffy"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=WocTNHlbf6g",
    "thumbnailUrl": "https://i.ytimg.com/vi/WocTNHlbf6g/maxresdefault.jpg",
    "levelId": 56587109,
    "description": "hope u liked the free demon <3 [final update]",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      },
      {
        "player": "Jack",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ]
  },
  {
    "id": 128665322,
    "position": 58,
    "name": "red alert",
    "difficulty": "Easy",
    "rating": 1.18,
    "publisher": "ratliffigd",
    "creators": [
      "ratliffigd"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=yY9KoENQpbs",
    "thumbnailUrl": "https://i.ytimg.com/vi/yY9KoENQpbs/maxresdefault.jpg",
    "levelId": 128665322,
    "description": "2.0 styled level for destriv's cc",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 56210242,
    "position": 59,
    "name": "Shiver",
    "difficulty": "Easy",
    "rating": 1.16,
    "publisher": "SpKale",
    "creators": [
      "SpKale"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=KOm4M8ic8nk",
    "thumbnailUrl": "https://i.ytimg.com/vi/KOm4M8ic8nk/maxresdefault.jpg",
    "levelId": 56210242,
    "description": "he will NEVER cold.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 5904109,
    "position": 60,
    "name": "Platinum Adventure",
    "difficulty": "Easy",
    "rating": 1.13,
    "publisher": "Jerry4",
    "creators": [
      "Jerry4"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=DWGGjNnU5CA",
    "thumbnailUrl": "https://i.ytimg.com/vi/DWGGjNnU5CA/maxresdefault.jpg",
    "levelId": 5904109,
    "description": "pls no harder rub",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 566659,
    "position": 61,
    "name": "demon mixed",
    "difficulty": "Easy",
    "rating": 1.11,
    "publisher": "RealOggY",
    "creators": [
      "RealOggY"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=VVh_HkR17kk",
    "thumbnailUrl": "https://i.ytimg.com/vi/VVh_HkR17kk/maxresdefault.jpg",
    "levelId": 566659,
    "description": "i mixed some demon maps",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 126762295,
    "position": 62,
    "name": "SCORIGAMI",
    "difficulty": "Easy",
    "rating": 1.09,
    "publisher": "TornadoMan616",
    "creators": [
      "TornadoMan616"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=SNTd0uQeS-g",
    "thumbnailUrl": "https://i.ytimg.com/vi/SNTd0uQeS-g/maxresdefault.jpg",
    "levelId": 126762295,
    "description": "1 day level made as a result of a bet we made in regards to the newest NFL scorigami game | 40-40 final score - Dallas Cowboys vs. Green Bay Packers - 9/28/25",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 55520,
    "position": 63,
    "name": "THE LIGHTNING ROAD",
    "difficulty": "Easy",
    "rating": 1.05,
    "publisher": "timeless real",
    "creators": [
      "timeless real"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=6403P2-763E",
    "thumbnailUrl": "https://i.ytimg.com/vi/6403P2-763E/maxresdefault.jpg",
    "levelId": 55520,
    "description": "Removed Coins, ~ Timeless Real / Reduloc",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  },
  {
    "id": 88494611,
    "position": 64,
    "name": "Eternal",
    "difficulty": "Easy",
    "rating": 1.04,
    "publisher": "YunHaSeu14",
    "creators": [
      "YunHaSeu14"
    ],
    "verifier": "jd",
    "videoUrl": "https://www.youtube.com/watch?v=Rqg12KDopUo",
    "thumbnailUrl": "https://i.ytimg.com/vi/Rqg12KDopUo/maxresdefault.jpg",
    "levelId": 88494611,
    "description": "Eternal happiness...  :)",
    "requirementPercent": 100,
    "records": [
      {
        "player": "jd",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ]
  },
  {
    "id": 13519,
    "position": 65,
    "name": "The Nightmare",
    "difficulty": "Easy",
    "rating": 1.04,
    "publisher": "Jax",
    "creators": [
      "Jax"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=Xl4stg-bsxk",
    "thumbnailUrl": "https://i.ytimg.com/vi/Xl4stg-bsxk/maxresdefault.jpg",
    "levelId": 13519,
    "description": "Hard map by Jax. 7813",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": "IL"
      }
    ]
  }
];
