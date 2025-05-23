//introdicao ao estudo de DOM

//selecionar e modificar elementos

//getElementById -> variavel simples
let titulo = document.getElementById("titulo");//pegar o elemento
console.log(titulo); // ver o elemento
titulo.innerText = "Outro Titulo";//modificar o texto

//getElementsByClassName -> Vetor(array)
let descricao = document.getElementsByClassName("descricao");
console.log(descricao[0]);
descricao[1].innerText = "Outro Texto";
descricao[0].style.color = "red";

//getElementsByTagName -> Vetor (array)
let p = document.getElementsByTagName("p");
console.log(p[1]);
p[1].style.fontFamily = "bold";

//querySelector -> variavel simples 
let paragrafo = document.querySelector("p");
console.log(paragrafo);
paragrafo.style.fontFamily = "40px";

//querySelectorAll -> Vetor(array)
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach(element => element.style.color="pink");

// lançamentos de evetos (EventListener)

function mudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
}

//2 - add o ouvinte(addEventListener)
document.querySelector(".btn").addEventListener(
    "click",outraCorFundo
);

function outraCorFundo(){
    document.body.style.backgroundColor = "orange"
}

