'use strict';

console.log(document);
/*
#document
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM</title>
  <link rel="stylesheet" href="./styles.css">
  <script src="./index.js" defer></script>
</head>
<body style="background-color: #1c1b21; text-align: center">
  <img src="./logo.svg" alt>
  <div class="panel">I love this!</div>
  <input class="input" id="input">
  <button class="button">Change</button>
</body>
</html>
*/

console.log(document.querySelector('.panel')); // <div class="panel">I love this!</div>

const panelText = document.querySelector('.panel').innerText;
console.log(panelText); // I love this!

const panel = document.querySelector('.panel');
panel.textContent = 'I hate this..';
console.log(panel.textContent); // I hate this..

const input = document.querySelector('.input');
console.log(input.value); // ...
input.value = 'enter..';
console.log(input.value); // enter..
