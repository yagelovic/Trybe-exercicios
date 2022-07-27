function texto() {
    let text = document.getElementsByTagName('p')[1];
    text.innerHTML = "Trabalhando com programação!"
}
texto();

function amareloVerde() {
    let color = document.getElementsByClassName('main-content')[0];
    color.style.background = "rgb(76,164,109)";
}
amareloVerde();

function vermelhoBranco() {
    let color2 = document.getElementsByClassName('center-content')[0];
    color2.style.background = 'white';
}
vermelhoBranco();

function corrigeTexto() {
    let text1 = document.getElementsByClassName('title')[0];
    text1.innerHTML = "Exercício 5.1 - JavaScript";
}
corrigeTexto();

function upper() {
    let up = document.getElementsByTagName('p')[0];
    up.innerHTML = up.innerHTML.toUpperCase();
}
upper();

function show() {
    let paragrafos = document.getElementsByTagName('p');
    for (let index = 0; index < paragrafos.length; index += 1) {
        console.log(paragrafos[index].innerHTML);
    }
}
show();