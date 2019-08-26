var Languages = ["Sajem Sulslem", "Tetan Tan", "B'artedhom", "Sajem Tan", "Ðab Tan", "Pleb Tan", "Sajem Gavmötëc", "Tolzen Tan", "Zhan Tan"];

var SoundChanges = {
  "Sajem Sulslem": {},
  "Tetan Tan": {
    "IPA": [
      ["ā", "aː"],
      ["ē", "eː"],
      ["ī", "iː"],
      ["ō", "oː"],
      ["ū", "uː"],
      ["mh", "m̥"],
      ["nh", "n̥"],
      ["ŋh", "ŋ̊"],
      ["^g", "ʀ"],
      ["^b", "ʙ"],
      ["th", "θ"],
      ["dh", "ð"],
      ["sh", "ʃ"],
      ["zh", "ʒ"],
      ["hi", "ç"],
      ["y", "ʝ"]
    ],
  },
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
    "Ðab Tan": [
      ["y", "i"],
      ["el", "w"],
      ["ol", "u"],
      ["ul", "u"],
      ["uh", "w"],
      ["ah", "a"],
      ["eh", "e"],
      ["x", "h"],
      ["c", "s"],
      ["s[hl]", "x"],
      ["j", "i"],
      ["z[hl]", "j"],
      ["th", "þ"],
      ["[fþsxh]n", "t"],
      ["[fþsxh]m", "p"],
      ["([zjv])([mn])", "$1w$2"],
      ["(.)\\1", "$1"],
      ["mt", "nt"],
      ["np", "mp"]
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
    ],
    "Zhan Tan": [
      ["[ea]h", "a"],
      ["k(?=.)", "q"],
      ["[eo]l", "ô"],
      ["th", "ç"],
      ["^[sz]l", "tl"],
      ["([aeiouô][hl]?)z([aeiouô][hl]?)", "$1ks$2"],
      ["ul", "ü"],
      ["uh", "û"],
      ["sl", "l"],
      ["zl", "r"]
    ]
  },
  "Ðab Tan": {
    "IPA": [
      ["w", "ə"],
      ["x", "ʃ"],
      ["j", "ʒ"],
      ["þ", "θ"],
      ["i(?=[aeiouw])", "i̯"]
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
  },
  "Zhan Tan": {
    "IPA": [
      ["l", "ɬ"],
      ["r", "ɮ"],
      ["ç", "θ"],
      ["sh", "ʃ"],
      ["zh", "ʒ"],
      ["ô", "ø̞"],
      ["û", "ʌ"],
      ["ü", "ʊ"],
      ["c", "t͡s"]
    ]
  }
};

var Lexicon = {
  "Sajem Sulslem": {
    "gâmuki̯": [{"path":["noun"], "defs":["tree"]}],
    "tututi̯": [{"path":["noun"], "defs":["clover"]}],
    "doφâ̯": [{"path":["???"], "defs":[]}],
    "dêni̯": [{"path":["???"], "defs":[]}],
    "o": [{"path":["infix"], "defs":["(replaces vowel nucleus of final syllable)"]}],
    "tʰêφi̯": [{"path":["???"], "defs":["mineral (?)"]}],
    "p": [{"path":["???"], "defs":[]}],
    "min": [{"path":["???"], "defs":[]}],
    "âmi̯": [{"path":["???"], "defs":[]}],
    "nomi̯": [{"path":["???"], "defs":[]}],
    "xumâ̯": [{"path":["adj"], "defs":["much, many"]}],
    "zoti̯": [{"path":["???"], "defs":["suspicion or disinterest", "seem", "seemingly", "(zolt, zeltyt, vazolt)"]}],
    "oti̯": [{"path":["???"], "defs":["hindrance"]}],
    "oti̯": [{"path":["???"], "defs":["denotes qualities (cf. zežöt, fûmöt, etc.)"]}],
    "êki̯": [{"path":["???"], "defs":["surface", "consciousness", "plants"]}],
    "u": [{"path":["suffix"], "defs":["nominalizing suffix", "similar to Sajem Tan -so and -zhnu", "(goni > goln \"try\", go-u-ni > guni > gyn \"worker\"; vâjêmi > vajem \"only one of\", vâjê-u-mi > vâjomi > vajolm \"hermit\")"]}],
    "vâ": [{"path":["adj"], "defs":["resourceful", "sneaky", "self-sufficient", "(vajem, vazolt [vâ + zoti \"suspicion, disinterest\", literally \"that which is disinterested and sneaky\"], -vâ [instrumental])"]}],
  },
  "Tetan Tan": {
    "zexu": [{"path":["???"], "defs":["this word is"]}],
    "da": [{"path":["conj"], "defs":["and"]}],
    "ein": [{"path":["???"], "defs":["to mean something"]}],
    "d'ein": [{"path":["???"], "defs":["and means(in conjunction with zexu)"]}],
    "vum": [{"path":["noun"], "defs":["spaceship"]}],
    "dī": [{"path":["noun"], "defs":["language"]}],
    "āshauxaun": [{"path":["noun"], "defs":["hat"]}],
    "deimhu": [{"path":["noun"], "defs":["tetan"]}],
    "ōdaunhao": [{"path":["noun"], "defs":["axe"]}],
    "auhūm": [{"path":["noun"], "defs":["bag"]}],
    "dheg": [{"path":["noun"], "defs":["planet", "world"]}],
  },
  "B'artedhom": {
    "son": [{"path":["noun"], "defs":["child", "daughter"]}],
    "d'usamat": [{"path":["noun"], "defs":["wheeled cart"]}]
  },
  "Ðab Tan": {},
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
for (var i = 0; i < Languages.length; i++) {
  if (!Lexicon.hasOwnProperty(Languages[i])) {
    Lexicon[Languages[i]] = {};
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
