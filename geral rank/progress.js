// ==UserScript==
// @name         Progress Everywhere - Geral Rank
// @namespace    http://tampermonkey.net/
// @version      0.2.1
// @description  The uses sprogress on geral rank page.
// @author       Gustavo Marmentini
// @include      https://www.urionlinejudge.com.br/judge/pt/rank
// @include      https://www.urionlinejudge.com.br/judge/pt/rank?page=*
// @grant        none
// ==/UserScript==

var totalProblems = 1493;
var totalCont = $('tbody tr td.medium').length;

var arrayPorcentagem = [];

$(document).ready(function(){
    $('thead tr').insertAt(7, "<th class='small'>Progresso</th>");

    for(i=1; i<=totalCont; i++){
        var userProblemsSolved = $('tbody tr:nth-child(' + i + ') td:nth-child(5)').text();
        userProblemsSolved = userProblemsSolved.replace(/\s/g, "");
        userProblemsSolved = userProblemsSolved.replace(/\./g,'');

        userProblemsSolved = parseInt(userProblemsSolved);

        var porcentagem = (userProblemsSolved*100.0)/totalProblems;
        porcentagem = porcentagem.toFixed(2);

        arrayPorcentagem.push(porcentagem);
    }

    for(i=0; i<=totalCont; i++){
        $('tbody tr:eq(' + i + ') td:eq(6)').after('<td class="small"><span class="porc">' + arrayPorcentagem[i] + '%</span></td>');
    }
});