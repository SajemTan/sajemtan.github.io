var findST = function(elname) {
  for (var k in lexicon_flat) {
    for (var i = 0; i < lexicon_flat[k].length; i++) {
      for (var w = 0; w < lexicon_flat[k][i].defs.length; w++) {
        if (lexicon_flat[k][i].defs[w] == elname) {
          return "<a href=\"lexicon.html#" + k + "\">" + k + "</a>";
        }
      }
    }
  }
  return "[none yet]";
};
var ls = document.getElementsByTagName("td");
var n = 1;
for (var i = 0; i < ls.length; i++) {
  if (ls[i].id) {
    ls[i].innerHTML = "<b>" + n + "</b><br><b>" + findST(ls[i].id) + "</b><br><span>" + ls[i].id + "</span>";
    ls[i].className = "elem";
    n++;
  }
}
