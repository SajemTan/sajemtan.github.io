var Languages = ["B'artedhom", "Sajem Tan", "Pleb Tan", "Sajem Gavmötëc", "Tolzen Tan"];

var SoundChanges = {
  "B'artedhom": {},
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
    "Sajem Gavmötëc": [
      ["eh", "ë"],
      ["ah", "a"],
      ["n", "ng"],
      ["x", "c"],
      ["uh", "å"],
      ["ol", "ö"],
      ["sl", "l"],
      ["zl", "r"],
      ["el", "ë"],
      ["ul", "ù"],
      ["([aåeëioöuùy]|ij)th(?=[aåeëioöuùy]|ij)", "$1ð"],
      ["th", "þ"],
      ["y", "ij"],
      ["sh", "š"],
      ["zh", "ž"]
    ],
    "Tolzen Tan": [
      ["([fs]|[st]h|sl)(?=[mn])", "h"],
      ["([vz]|zh|zl)(?=[mn])", ""],
      ["zl", "r"],
      ["th", "ţ"],
      ["sh", "š"],
      ["zh", "ž"],
      ["sl", "hl"],
      ["uh|ah", "A"],
      ["a", "A"],
      ["i", "I"],
      ["[oe]l", "Ö"],
      ["o", "O"],
      ["eh?", "E"],
      ["ul?", "U"],
      ["x", "h"],
      ["A(?=[tkcfsţš]|h?[mn]|h(?!l))", "â"],
      ["A", "a"],
      ["E(?=[tkcfsţš]|h?[mn]|h(?!l))", "ê"],
      ["E", "e"],
      ["I(?=[tkcfsţš]|h?[mn]|h(?!l))", "î"],
      ["I", "i"],
      ["O(?=[tkcfsţš]|h?[mn]|h(?!l))", "ô"],
      ["O", "o"],
      ["Ö(?=[tkcfsţš]|h?[mn]|h(?!l))", "ë"],
      ["Ö", "ö"],
      ["U(?=[tkcfsţš]|h?[mn]|h(?!l))", "û"],
      ["U", "u"],
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
      ["c(?=[ie])", "s"],
      ["c", "k"],
      ["j", "d\u0361\u0292"]
    ]
  },
  "Sajem Gavmötëc": {
    "IPA": [
      ["l", "ɬ"],
      ["([aåeëioöuù]|ij)ɬ([aåeëioöuù]|ij)", "$1l$2"],
      ["a", "ɑ"],
      ["å", "ɤ"],
      ["c", "t͡s"],
      ["ë", "œ"],
      ["ij", "Y"],
      ["j", "d͡ʒ"],
      ["Y", "ij"],
      ["ng", "ŋ"],
      ["ö", "ɵ"],
      ["r", "ɹ̪"],
      ["š", "ʃ"],
      ["þ", "θ"],
      ["ð", "ð"],
      ["ù", "ʊ"],
      ["z", "dz"],
      ["ž", "ʒ"]
    ]
  },
  "Tolzen Tan": {
    "IPA": [
      ["ţ", "θ"],
      ["š", "ʃ"],
      ["ž", "ʒ"],
      ["hl", "ɬ"],
      ["r", "l"],
      ["hm", "m̥"],
      ["hn", "n̥"],
      ["â", "ä"],
      ["a", "æ"],
      ["ê", "ɛ"],
      ["e", "e̞"],
      ["ë", "ɞ"],
      ["ö", "ɵ"],
      ["î", "ɪ"],
      ["y", "ʉ"],
      ["c", "t͡s"],
      ["ô", "ɔ"],
      ["û", "ʊ"]
    ]
  }
};

var Lexicon = {
  "B'artedhom": {
    "son": [{"path":["noun"], "defs":["child", "daughter"]}],
    "d'usamat": [{"path":["noun"], "defs":["wheeled cart"]}]
  },
  "Pleb Tan": {},
  "Sajem Gavmötëc": {
    "sån": [{"path":["noun"], "defs":["child", "daughter"]}],
    "þùsem": [{"path":["noun"], "defs":["wheeled cart"]}]
  },
  "Tolzen Tan": {
    "kêhêk": [{"path":["verb"], "defs":["feel", "emote", "used to express all emotions"]}]
  }
};

Lexicon["Sajem Tan"] = lexicon_flat;
for (var k in lexicon_flat) {
  if (JSON.stringify(lexicon_flat[k]).includes('"archaic"')) {
    delete Lexicon["Sajem Tan"][k];
  }
}

var changeword = function(wd, chlst) {
  for (var i = 0; i < chlst.length; i++) {
    wd = wd.replace(chlst[i][0], chlst[i][1]);
  }
  return wd;
};

var regexify = function(chlst) {
  return chlst.map(function(x) {
    return [new RegExp(x[0], "gu"), x[1]];
  });
};

// Call this once all lexicon files have been loaded to generate all sound change results
var propagate = function() {
  for (var l = 0; l < Languages.length; l++) {
    var lang = Languages[l];
    var next = SoundChanges[lang];
    var langlst = Object.keys(next);
    for (var k = 0; k < langlst.length; k++) {
      var tolang = langlst[k];
      var chlst = regexify(next[tolang]);
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
