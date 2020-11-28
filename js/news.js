import articleCreate from "../js/articleCreate.js";

const candidatos = [
    {
        nome: "Banha",
        imagem: "../images/candidatos/banha.jpg",
        url: "https://politica.estadao.com.br/eleicoes/2020/candidatos/sp/santos/prefeito/banha,15",
        descricao: "Site com dados sobre o candidato"
    },
    {
        nome: "Bayard",
        imagem: "../images/candidatos/bayard.jpg",
        url: "https://politica.estadao.com.br/eleicoes/2020/candidatos/sp/santos/prefeito/bayard,14",
        descricao: "Site com dados sobre o candidato"
    },
    {
        nome: "Carlos Paz",
        imagem: "../images/candidatos/carlospaz.jpg",
        url: "https://politica.estadao.com.br/eleicoes/2020/candidatos/sp/santos/prefeito/carlos-paz,70",
        descricao: "Site com dados sobre o candidato"
    },
    {
        nome: "Delegado Romano",
        imagem: "../images/candidatos/delegado-romano.jfif",
        url: "https://politica.estadao.com.br/eleicoes/2020/candidatos/sp/santos/prefeito/delegado-romano,27",
        descricao: "Site com dados sobre o candidato"
    },
    {
        nome: "Douglas Martins",
        imagem: "../images/candidatos/douglas.jpg",
        url: "https://politica.estadao.com.br/eleicoes/2020/candidatos/sp/santos/prefeito/douglas-martins,13",
        descricao: "Site com dados sobre o candidato"
    },
    {
        nome: "Dr Marcio Aurelio",
        imagem: "../images/candidatos/drMarcioAurelio.jfif",
        url: "https://politica.estadao.com.br/eleicoes/2020/candidatos/sp/santos/prefeito/dr-marcio-aurelio,12",
        descricao: "Site com dados sobre o candidato"
    },
    {
        nome: "Guilherme Prado",
        imagem: "../images/candidatos/guilherme.jpeg",
        url: "https://politica.estadao.com.br/eleicoes/2020/candidatos/sp/santos/prefeito/guilherme-prado,50",
        descricao: "Site com dados sobre o candidato"
    },
    {
        nome: "Ivan Sartori",
        imagem: "../images/candidatos/ivan-sartori.jpg",
        url: "https://politica.estadao.com.br/eleicoes/2020/candidatos/sp/santos/prefeito/ivan-sartori,55",
        descricao: "Site com dados sobre o candidato"
    },
    {
        nome: "João Villela",
        imagem: "../images/candidatos/joao-villela.jfif",
        url: "https://politica.estadao.com.br/eleicoes/2020/candidatos/sp/santos/prefeito/joao-villela,30",
        descricao: "Site com dados sobre o candidato"
    },
    {
        nome: "Luiz Xavier",
        imagem: "../images/candidatos/luiz-xavier.jpg",
        url: "https://politica.estadao.com.br/eleicoes/2020/candidatos/sp/santos/prefeito/luiz-xavier,16",
        descricao: "Site com dados sobre o candidato"
    },
    {
        nome: "Marcelo Coelho",
        imagem: "../images/candidatos/marcelo.jpg",
        url: "https://politica.estadao.com.br/eleicoes/2020/candidatos/sp/santos/prefeito/marcelo-coelho,28",
        descricao: "Site com dados sobre o candidato"
    },
    {
        nome: "Moysés Fernandes",
        imagem: "../images/candidatos/moyses-fernandes.jfif",
        url: "https://politica.estadao.com.br/eleicoes/2020/candidatos/sp/santos/prefeito/moyses-fernandes,43",
        descricao: "Site com dados sobre o candidato"
    },
    {
        nome: "Rogério Santos",
        imagem: "../images/candidatos/rogerio-santos.jfif",
        url: "https://politica.estadao.com.br/eleicoes/2020/candidatos/sp/santos/prefeito/rogerio-santos,45",
        descricao: "Site com dados sobre o candidato"
    },
    {
        nome: "Tanah Correa",
        imagem: "../images/candidatos/tanah-correa.jpg",
        url: "https://politica.estadao.com.br/eleicoes/2020/candidatos/sp/santos/prefeito/tanah-correa,23",
        descricao: "Site com dados sobre o candidato"
    },
    {
        nome: "Thiago Andrade",
        imagem: "../images/candidatos/thiago-andrade.jpg",
        url: "https://politica.estadao.com.br/eleicoes/2020/candidatos/sp/santos/prefeito/thiago-andrade,65",
        descricao: "Site com dados sobre o candidato"
    }
]

const selectCandidato = document.getElementById("candidato");

candidatos.forEach((candidato) => {
    let optionCandidato = document.createElement("option");
    optionCandidato.appendChild(document.createTextNode(`${candidato.nome}`));
    optionCandidato.setAttribute("value", `${candidato.nome}`);
    selectCandidato.appendChild(optionCandidato);
});

articleCreate(candidatos, selectCandidato.value);

selectCandidato.onchange = () => {
    console.log(selectCandidato.value)
    articleCreate(candidatos, selectCandidato.value);
}

const acessarNoticia = document.getElementsByClassName("acessarNoticia");
const formAvaliarNoticia = document.getElementsByClassName("formAvaliarNoticia");
// console.log(acessarNoticia);
// console.log(formAvaliarNoticia);

for (let index = 0; index < acessarNoticia.length; index++) {
    acessarNoticia[index].onclick = () => {
        formAvaliarNoticia[index].hidden = false;
    }
}