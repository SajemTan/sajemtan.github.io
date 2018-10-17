var Languages = ["Sajem Tan", "Pleb Tan", "Tolzen Tan"];

var SoundChanges = {
  "Sajem Tan": {
    "IPA": [
      ["th", "\u03b8"],
      ["sh", "\u0283"],
      ["zh", "\u0292"],
      ["sl", "\u026c"],
      ["zl", "\u026e"],
      ["eh", "\u025b"],
      ["ah", "\u0251"],
      ["c", "t\u0361s"],
      ["uh", "\u028c"],
      ["ul", "\u028a"],
      ["a", "\u00e6"],
      ["el", "\u0153"],
      ["ol", "\u00f8"]
    ],
    "Pleb Tan": [],
    "Tolzen Tan": [
      [/a(?!([fvszh]|th|$))/, "ah"],
      [/e(?!([fvszh]|th|$))/, "ê"],
      [/i(?!([fvsz]|th|$))/, "î"],
      [/u(?!([fvszhl]|th|$))/, "w"],
      [/ah(?=([fvsz]|th|$))/, "â"],
      [/eh(?=([fvsz]|th|$))/, "ei"],
      [/[ou]l/, "ö"],
      [/a(?!h)/, "ä"],
      ["ah", "a"],
      ["sl", "l"],
      ["zl", "ʁ"],
      [/i(?=[lʁ])/, "e"],
      ["[td]{2}", "tt"],
      ["[fv]{2}", "ff"],
      ["[sz]{2}", "ss"],
      ["[kg]{2}", "kk"],
      ["uh", "a"],
      [/ö(?=([lʁtdszxfvcmnkgj]|[szt]h){2})/, "ê"],
      [/x(?=[iyu])/, "ch"],
    ]
  },
  "Pleb Tan": {
    "IPA": [
      ["ah", "\u0251"],
      ["eh", "\u025b"],
      ["uh", "\u028c"],
      ["a", "\u00e6"],
      ["sh", "\u0283"],
      ["zh", "\u0292"],
      ["th", "\u03b8"],
      [/c(?=[ie])/, "s"],
      ["c", "k"],
      ["j", "d\u0361\u0292"]
    ]
  },
  "Tolzen Tan": {
    "IPA": [
      ["\u00e4", "\u00e6"],
      ["a", "ɑ"],
      ["â", "ɒ"],
      ["ê", "ɛ"],
      ["î", "ɪ"],
      ["ô", "c"],
      ["w", "ʊ"],
      ["ö", "ø"],
      ["y", "ɨ"],
      ["ch", "ç"],
      ["th", "θ"],
      ["x", "h"]
    ]
  }
};

var Lexicon = {
  "Pleb Tan": {},
  "Tolzen Tan": {
    "keichêk": [{"path":[], "defs":["feel", "emote"]}]
  }
};

Lexicon["Sajem Tan"] = lexicon_flat;

var changeword = function(wd, chlst) {
  for (var i = 0; i < chlst.length; i++) {
    wd = wd.replace(chlst[i][0], chlst[i][1]);
  }
  return wd;
};

// Call this once all lexicon files have been loaded to generate all sound change results
var propagate = function() {
  for (var l = 0; l < Languages.length; l++) {
    var lang = Languages[l];
    var next = SoundChanges[lang];
    var langlst = Object.keys(next);
    for (var k = 0; k < langlst.length; k++) {
      var tolang = langlst[k];
      var chlst = next[tolang];
      var wdlst = Object.keys(Lexicon[lang]);
      for (var w = 0; w < wdlst.length; w++) {
        var wd = wdlst[w];
        if (tolang == "IPA") {
          Lexicon[lang][wd].push({"ipa": changeword(wd, chlst)});
        } else {
          var nwd = changeword(wd, chlst);
          if (!Lexicon[tolang].hasOwnProperty(nwd)) {
            Lexicon[tolang][nwd] = [];
          }
          Lexicon[tolang][nwd].push({"from": wd, "lang": lang});
          Lexicon[lang][wd].push({"to": nwd, "lang": tolang});
        }
      }
    }
  }
};
