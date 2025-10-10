'use strict';

let habbits = [];
const HABBITS_KEY = 'HABBITS';

// ** utility **
function loadData() {
  const habbitsStr = localStorage.getItem(HABBITS_KEY);
  const habbitsArr = JSON.parse(habbitsStr);

  if (Array.isArray(habbitsArr)) {
    habbits = habbitsArr;
  }
}

function saveData() {
  localStorage.setItem(HABBITS_KEY, JSON.stringify(habbits));
}

// загрузка данных.. по сути автоматическая/сразу (соответственно через IIFE)
(() => {
  loadData();
})();
