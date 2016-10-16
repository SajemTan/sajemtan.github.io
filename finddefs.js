var findST = function(query) {
  for (var k in lexicon_flat) {
    for (var i = 0; i < lexicon_flat[k].length; i++) {
      for (var w = 0; w < lexicon_flat[k][i].defs.length; w++) {
        if (lexicon_flat[k][i].defs[w] == query) {
          return k;
        }
      }
    }
  }
  return null;
};
var formatST = function(raw) {
  if (raw != null) {
    return "<a href=\"lexicon.html#" + raw + "\">" + raw + "</a>";
  } else {
    return "[none yet]";
  }
}
