let acessarNoticias = document.getElementById("acessarNoticia");
let formAvaliar = document.getElementById("formAvaliarNoticia");
let enviarFeedback = document.getElementById("enviarFeedback")

acessarNoticias.onclick = () => {
    formAvaliar.hidden = false;
};