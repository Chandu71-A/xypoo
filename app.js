let menu = document.getElementById('menu');
let menuBar = document.getElementById('menuBar');
let menuBack = document.getElementById('menuBack');
let h = document.getElementById('h4');

function menuBtn() {
    if (menuBar.classList.contains("d-none")) {
        menuBar.classList.add("d-block");
        menuBar.classList.remove("d-none");
    }
}

function menuback() {
    menuBar.classList.remove("d-block");
    menuBar.classList.add("d-none");
}

let input01 = document.getElementById('input01');
let inputtext01 = document.getElementById('InputText01');
inputtext01.classList.add('d-none');
input01.onclick = function() {
    input01.removeAttribute('placeholder');
    inputtext01.classList.remove('d-none');
    inputtext01.classList.add('inputtext01');
}
let input02 = document.getElementById('input02');
let inputtext02 = document.getElementById('InputText02');
inputtext02.classList.add('d-none');
input02.onclick = function() {
    input02.removeAttribute('placeholder');
    inputtext02.classList.remove('d-none');
    inputtext02.classList.add('inputtext02');
}
let input03 = document.getElementById('input03');
let inputtext03 = document.getElementById('InputText03');
inputtext03.classList.add('d-none');
input03.onclick = function() {
    input03.removeAttribute('placeholder');
    inputtext03.classList.remove('d-none');
    inputtext03.classList.add('inputtext03');
}