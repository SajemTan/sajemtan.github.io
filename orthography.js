var Orthographies = {
  handles: [],
  names: {},
  input: {},
  output: {},
  parsing: {},
  postprocess: {}
};
var Alphabet = ["d", "g", "x", "j", "f", "v", "th", "s", "z", "sh", "zh", "sl", "zl", "m", "n", "a", "el", "e", "ol", "i", "y", "uh", "ul", "c", "t", "k", "ah", "eh", "o", "u"];
for (var i = 0; i < Alphabet.length; i++) {
  Orthographies.output[Alphabet[i]] = {};
}
function registerOrthography(handle, display, letters, parsing, altinput, postprocess) {
  Orthographies.handles.push(handle);
  Orthographies.names[handle] = display;
  Orthographies.input[handle] = {};
  for (var i = 0; i < Alphabet.length; i++) {
    var ls = letters[i];
    if (typeof ls == "string") {
      if (ls.length == 1) {
        ls = [ls];
      } else {
        ls = [...ls];
      }
    }
    Orthographies.output[Alphabet[i]][handle] = ls;
    for (var j = 0; j < ls.length; j++) {
      Orthographies.input[handle][ls[j]] = [Alphabet[i], j];
    }
  }
  Orthographies.parsing[handle] = parsing || {};
  for (var k in altinput) {
    Orthographies.input[handle][k] = altinput[k];
  }
  postprocess = postprocess || [];
  Orthographies.postprocess[handle] = [];
  for (var i = 0; i < postprocess.length; i++) {
    Orthographies.postprocess[handle].push([new RegExp(postprocess[i][0], "g"), postprocess[i][1]]);
  }
}

registerOrthography("oldortho", "Original Orthography",
  ["dD", "gG", "xX", "jJ", "fF", "vV", ["th", "Th", "TH"], "sS", "zZ", ["sh", "Sh", "SH"], ["zh", "Zh", "ZH"], ["sl", "Sl", "SL"], ["zl", "Zl", "ZL"],
   "mM", "nN", "aA", ["el", "El", "EL"], "eE", ["ol", "Ol", "OL"], "iI", "yY", ["uh", "Uh", "UH"], ["ul", "Ul", "UL"],
   "cC", "tT", "kK", ["ah", "Ah", "AH"], ["eh", "Eh", "EH"], "oO", "uU"],
  {"h":-1, "H":-1, "l":-1, "L":-1}); // -1: stick to previous, +1: grab next, 0: both
registerOrthography("newortho", "Reformed Orthography",
  ["dD", "gG", "xX", "jJ", "fF", "vV", "ţŢ", "sS", "zZ", "šŠ", "žŽ", "lL", "rR",
   "mM", "nN", "aA", "ëË", "eE", "öÖ", "iI", "yY", "ûÛ", "üÜ", "cC", "tT", "kK", "âÂ", "êÊ", "oO", "uU"]);
registerOrthography("oldipa", "Original IPA",
  ["d", "g", "x", "ʎ", "f", "v", "θ", "s", "z", "ʃ", "ʒ", "ɬ", "ɮ", "m", "n", "æ", "œ", "e", "ø", "i", "y", "ʌ", "ɤ", "t͡s", "t", "k", "ɑ", "ɛ", "ɵ", "u"],
  {"\u0361": 0});
registerOrthography("newipa", "Reformed IPA",
  ["d", "g", "x", "j", "f", "v", "θ", "s", "z", "ʃ", "ʒ", "ɬ", "ɮ", "m", "n", "æ", "œ", "e", "ø", "i", "y", "ʌ", "ʊ", ["t͡s"], "t", "k", "ɑ", "ɛ", "o", "u"],
  {"\u0361": 0});
registerOrthography("hebrew", "Hebrew",
  ["ד", "ג", "ח", "י", "פ", "ב", "ת", "ס", "ז", "שׁ", "שׂ", "ל", "ר", 
  "מ", "נ", "\u05b7", ["עֶ"], "\u05b5", ["עֵ"], "\u05b4", ["עִ"], "\u05b0", "\u05b3", "צ", "ט", "כ", "\u05b8", "\u05b6", ["עֹ"], "\u05bb"],
  {"ע": 1},
  {"ף": ["f", 0], "ך": ["k", 0], "ץ": ["c", 0], "ן": ["n", 0], "ם": ["m", 0]},
  [["פ(?=\\s|$)", "ף"], ["כ(?=\\s|$)", "ך"], ["נ(?=\\s|$)", "ן"], ["מ(?=\\s|$)", "ם"], ["צ(?=\\s|$)", "ץ"]]);

function parseString(string, ortho, skip_con) {
  var chardict = Orthographies.input[ortho];
  var parsedict = Orthographies.parsing[ortho]
  var parsed = [];
  var splitted = [];
  var shouldappend = false;
  for (var i = 0; i < string.length; i++) {
    if (i != 0 && (shouldappend || parsedict[string[i]] <= 0)) {
      splitted[splitted.length-1] += string[i];
      shouldappend = false;
    } else {
      splitted.push(string[i]);
    }
    if (parsedict[string[i]] >= 0) {
      shouldappend = true;
    }
  }
  var incon = false;
  for (var i = 0; i < splitted.length; i++) {
    if (incon && i < splitted.length-1 &&
        chardict.hasOwnProperty(splitted[i]) &&
        chardict[splitted[i]][0] == "o" &&
        chardict.hasOwnProperty(splitted[i+1]) &&
        chardict[splitted[i+1]][0] == "m") {
      incon = false;
    }
    if (incon) {
      parsed[parsed.length-1][0] += splitted[i];
    } else if (skip_con && parsed.length >= 3 &&
               parsed[parsed.length-3][0] == "c" &&
               parsed[parsed.length-2][0] == "o" &&
               parsed[parsed.length-1][0] == "n") {
      parsed.push([splitted[i]]);
      incon = true;
    } else {
      parsed.push(chardict[splitted[i]] || [splitted[i]]);
    }
  }
  return parsed;
}

function unparseString(parsed_string, ortho) {
  var ret = parsed_string.map(function(chr) {
    if (chr.length == 1) {
      return chr[0];
    } else {
      var ls = Orthographies.output[chr[0]][ortho];
      return ls[Math.min(ls.length-1, chr[1])];
    }
  }).join('');
  var post = Orthographies.postprocess[ortho];
  console.log(post);
  for (var i = 0; i < post.length; i++) {
    if (i == 2) { console.log(post[i]); console.log(ret); }
    ret = ret.replace(post[i][0], post[i][1]);
    if (i == 2) {console.log(ret);}
  }
  return ret;
}

function convert(string, srcorth, destorth, skip_con) {
  return unparseString(parseString(string, srcorth, skip_con), destorth);
}

function convertPage(srcorth, destorth, skip_con) {
  var ls = document.getElementsByClassName("st");
  for (var i = 0; i < ls.length; i++) {
    ls[i].textContent = convert(ls[i].textContent, srcorth, destorth, skip_con);
  }
}

function makeSelector(id) {
  var ret = document.createElement("select");
  ret.id = id;
  var handle;
  var s = "";
  for (var i = 0; i < Orthographies.handles.length; i++) {
    handle = Orthographies.handles[i];
    s += '<option value="'+handle+'">'+Orthographies.names[handle]+'</option>';
  }
  ret.innerHTML = s;
  ret.value = "oldortho";
  return ret;
}
