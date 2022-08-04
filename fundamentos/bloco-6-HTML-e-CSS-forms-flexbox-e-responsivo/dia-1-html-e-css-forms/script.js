const botao = document.querySelector("#button-submit");

function impedeSubmit(event) {
event.preventDefault();
}
botao.addEventListener("click", impedeSubmit);