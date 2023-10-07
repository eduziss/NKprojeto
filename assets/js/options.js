const options1 = document.querySelector("#opcs1")
const options2 = document.querySelector("#opcs2")
const options3 = document.querySelector("#opcs3")
const t = document.querySelector("#teste")

options1.addEventListener("click", opcoes1)
options2.addEventListener("click", opcoes2)
options3.addEventListener("click", opcoes3)


function opcoes1(){

let imagem = document.createElement("img");

imagem.src = "./assets/kgFundo.png";


imagem.style.width = "200px"; 

var container = document.getElementById("teste");
container.appendChild(imagem);

}

function opcoes2(){
t.innerHTML = "Teasaatado"
}

function opcoes3(){
t.innerHTML = "Testaaadaao"
}