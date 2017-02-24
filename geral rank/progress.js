// ==UserScript==
// @name         Progress Everywhere - Geral Rank
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  The uses sprogress on geral rank page.
// @author       Gustavo Marmentini
// @include      *://www.urionlinejudge.com.br/judge/*/rank
// @include      *://www.urionlinejudge.com.br/judge/*/rank?page=*
// @grant        none
// ==/UserScript==

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

var totalProblems = 1494;
var totalCont = $('tbody tr td.medium').length;
var url = window.location.href;
url = url.split('/');
var langUrl = url[4];
var progressText = {};

progressText["pt"] = 'Progresso';
progressText["en"] = 'Progress';
progressText["es"] = 'Progreso';

var arrayPorcentagem = [];

$(document).ready(function(){
    $('thead tr').insertAt(7, "<th class='small'>" + progressText[langUrl] + "</th>");

    for(i=1; i<=totalCont; i++){
        var userProblemsSolved = $('tbody tr:nth-child(' + i + ') td:nth-child(5)').text();
        userProblemsSolved = userProblemsSolved.replace(/\s/g, "");
        userProblemsSolved = userProblemsSolved.replace(/\./g, "");
        userProblemsSolved = userProblemsSolved.replace(/\,/g, "");

        userProblemsSolved = parseInt(userProblemsSolved);

        var porcentagem = (userProblemsSolved*100.0)/totalProblems;
        porcentagem = porcentagem.toFixed(2);

        arrayPorcentagem.push(porcentagem);
    }

    for(i=0; i<=totalCont; i++){
        $('tbody tr:eq(' + i + ') td:eq(6)').after('<td class="small"><span class="porc">' + arrayPorcentagem[i] + '%</span></td>');
    }
});