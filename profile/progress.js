// ==UserScript==
// @name         Progress Everywhere - Profile
// @namespace    https://www.urionlinejudge.com.br/judge/pt
// @version      0.2.1
// @description  The user progress on profile page.
// @author       Gustavo Marmentini
// @include      *://www.urionlinejudge.com.br/judge/pt/profile/*
// @include      *://www.urionlinejudge.com.br/judge/pt/users/*
// @run-at document-idle
// @grant        none
// ==/UserScript==

// need to get this from *://www.urionlinejudge.com.br/judge/*/categories
var totalProblems = 1493;

var auxText = $('.pb-information > li:nth-child(5)').text();
auxText = auxText.split('\n');
auxText = auxText[2];
auxText = auxText.replace(/\s/g, "");
auxText = auxText.replace(/\./g,'');

var userProblemsSolved = parseInt(auxText);

var porcentagem = (userProblemsSolved*100.0)/totalProblems;

porcentagem = porcentagem.toFixed(2);

$('.pb-information').append("<li><span>Progresso:</span><span style='font-weight: normal;' class='porcentagem'></span></li>");
$('.porcentagem').html(porcentagem+'%');