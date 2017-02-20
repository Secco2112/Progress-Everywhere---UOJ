// ==UserScript==
// @name         Progress Everywhere - Geral Rank
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  The uses sprogress on geral rank page.
// @author       Gustavo Marmentini
// @include      https://www.urionlinejudge.com.br/judge/pt/rank
// @include      https://www.urionlinejudge.com.br/judge/pt/rank?page=*
// @grant        none
// ==/UserScript==

var totalProblems = 1493;

jQuery.fn.insertAt = function(index, element) {
  var lastIndex = this.children().size();
  if (index < 0) {
     index = Math.max(0, lastIndex + 1 + index);
  }
  this.append(element);
  if (index < lastIndex) {
      this.children().eq(index).before(this.children().last());
  }
  return this;
};

var arrayPorcentagem = [];

$(document).ready(function(){
    $('thead tr').insertAt(7, "<th class='small'>Progresso</th>");

    for(i=0; i<27; i++){
        var userProblemsSolved = $('tbody tr:nth-child(' + i + ') td:nth-child(5)').text();
        userProblemsSolved = userProblemsSolved.replace(/\s/g, "");
        userProblemsSolved = userProblemsSolved.replace(/\./g,'');

        userProblemsSolved = parseInt(userProblemsSolved);

        var porcentagem = (userProblemsSolved*100.0)/totalProblems;
        porcentagem = porcentagem.toFixed(2);

        arrayPorcentagem.push(porcentagem);
    }

    for(i=0; i<27; i++){
        $('tbody tr:eq(' + i + ') td:eq(6)').after('<td class="small"><span class="porc">' + arrayPorcentagem[i] + '%</span></td>');
    }
});