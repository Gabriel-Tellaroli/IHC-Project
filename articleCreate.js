const mainDiv = document.getElementsByClassName('mainDiv');

let articleCreate = (candidatos, filtrarCandidato) => {

    let politicArticles = document.getElementsByClassName('politic-item');
    if (politicArticles.length > 0) {
        let qntArticles = politicArticles.length
        for (let i = 0; i < qntArticles; i++) {
            mainDiv[0].removeChild(politicArticles[0]);
        }
    }
    candidatos.forEach((candidato) => {
        if (candidato.nome == filtrarCandidato || filtrarCandidato == "Default") { 
            // Estrutura article do Candidato.
            let article = document.createElement("article");
            article.setAttribute("class", "politic-item");

            let imageCandidato = document.createElement("img");
            imageCandidato.setAttribute("src", `${candidato.imagem}`);

            let header = document.createElement("header");

            let divNomeSite = document.createElement("div");

            let strongNome = document.createElement("strong");
            strongNome.appendChild(document.createTextNode(`${candidato.nome}`))

            let spanUrl = document.createElement("span");
            spanUrl.appendChild(document.createTextNode("politica.estadao.com.br"))

            let paragraphyDescricao = document.createElement("p");
            paragraphyDescricao.appendChild(document.createTextNode(`${candidato.descricao}`));

            let footer = document.createElement("footer");

            let paragraphyPorcetagem = document.createElement("p");
            let strongPorcentegem = document.createElement("strong");
            strongPorcentegem.appendChild(document.createTextNode("70% Confiável"));
            paragraphyPorcetagem.appendChild(strongPorcentegem);

            let buttonNoticia = document.createElement("button");
            buttonNoticia.setAttribute("id", "acessarNoticia");
            buttonNoticia.setAttribute("class", "button acessarNoticia");

            let linkNoticia = document.createElement("a");
            linkNoticia.setAttribute("class", "button");
            linkNoticia.setAttribute("target", "_blank");
            linkNoticia.setAttribute("href", `${candidato.url}`);


            linkNoticia.appendChild(document.createTextNode("Acessar Notícia"));

            let formAvaliarNoticia = document.createElement("form");
            formAvaliarNoticia.setAttribute("id", "formAvaliarNoticia");
            formAvaliarNoticia.setAttribute("class", "formAvaliarNoticia");
            formAvaliarNoticia.setAttribute("hidden", "true");

            let divFeedback = document.createElement("div");
            divFeedback.setAttribute("class", "feedback");

            let textArea = document.createElement("textarea");
            let textAreaAttributes = {
                name: "comentario",
                id: "text",
                cols: 30,
                rows: 10,
            }
            // Set textArea attributes.
            for (let key in textAreaAttributes) {
                textArea.setAttribute(key, textAreaAttributes[key]);
            }

            let inputFile = document.createElement("input");
            inputFile.setAttribute("type", "file");

            let inputConfiavel = document.createElement("input");
            inputConfiavel.setAttribute("type", "RADIO");

            let imageConfiavel = document.createElement("img");
            imageConfiavel.setAttribute("src", "../images/confiavel.svg");

            let inputFake = document.createElement("input");
            inputFake.setAttribute("type", "RADIO");

            let imageFake = document.createElement("img");
            imageFake.setAttribute("src", "../images/fake.svg");

            let buttonEnviarFeedback = document.createElement("button");
            buttonEnviarFeedback.setAttribute("id", "enviarFeedback");
            buttonEnviarFeedback.setAttribute("class", "button");
            buttonEnviarFeedback.appendChild(document.createTextNode("Enviar Feedback"))



            divFeedback.appendChild(textArea);
            divFeedback.appendChild(inputFile);
            divFeedback.appendChild(inputConfiavel);
            divFeedback.appendChild(imageConfiavel);
            divFeedback.appendChild(inputFake);
            divFeedback.appendChild(imageFake);
            divFeedback.appendChild(buttonEnviarFeedback);
            formAvaliarNoticia.appendChild(divFeedback);

            buttonNoticia.appendChild(linkNoticia);
            footer.appendChild(paragraphyPorcetagem);
            footer.appendChild(buttonNoticia);

            divNomeSite.appendChild(strongNome);
            divNomeSite.appendChild(spanUrl);
            header.appendChild(imageCandidato);
            header.appendChild(divNomeSite);
            article.appendChild(header);
            article.appendChild(paragraphyDescricao);
            article.appendChild(footer);
            article.appendChild(formAvaliarNoticia);
            mainDiv[0].appendChild(article);
        }
    });

}
export default articleCreate;