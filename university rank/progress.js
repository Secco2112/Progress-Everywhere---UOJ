// ==UserScript==
// @name         Progress Everywhere - University Rank
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Gustavo Marmentini
// @include      https://www.urionlinejudge.com.br/judge/pt/users/university/*
// @grant        none
// ==/UserScript==

var totalCont = $('tbody tr td.medium').length;
var totalProblems = 1493;
var arrayPor = [];

$('thead tr').append('<th class="small">Progresso</th>');

for(i=0; i<totalCont; i++){
    var userProblems = $('tbody tr:nth-child(' + i + ') td:nth-child(4)').text();
    userProblems = userProblems.replace(/\s/g, "");
    userProblems = userProblems.replace(/\./g,'');
    userProblems = parseInt(userProblems);

    var porcentagem = (userProblems*100.0)/totalProblems;
    porcentagem = porcentagem.toFixed(2);

    arrayPor.push(porcentagem);
}

for(i=0; i<totalCont; i++){
    $('tbody tr:nth-child(' + i + ')').append('<td class="small"><span class="porc"><span></td>');
    $('.porc').html(arrayPor[i]);
}