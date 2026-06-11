let atual = 0;

const imagens =
document.querySelectorAll(".carrossel img");

let galeria = {

    sanduba: [
        "image/foto1.jpeg",
        "image/foto2.jpeg",
        "image/foto3.jpeg",
        "image/foto4.jpeg"
    ],

    estudio: [
        "image/estudiofit (1).png",
        "image/estudiofit (2).png",
        "image/estudiofit (3).png",
        "image/estudiofit (4).png"
    ],

    bar: [
        "image/nossobar (1).png",
        "image/nossobar (2).png",
        "image/nossobar (3).png",
        "image/nossobar (4).png"
    ]
};

let galeriaAtual = [];


function abrirGaleria(nomeGaleria){

    console.log(nomeGaleria);

    galeriaAtual = galeria[nomeGaleria];

    console.log(galeriaAtual);

    atual = 0;

    document.getElementById("imagemAtual").src =
    galeriaAtual[atual];

    document.getElementById("meuCarrossel")
    .style.display = "flex";
}

function fecharGaleria(){

    document.getElementById("meuCarrossel")
    .style.display = "none";
}

function mudar(direcao){

    atual += direcao;

    if(atual >= galeriaAtual.length){
        atual = 0;
    }

    if(atual < 0){
        atual = galeriaAtual.length - 1;
    }

    document.getElementById("imagemAtual").src =
    galeriaAtual[atual];
}

document.getElementById("formContato")
.addEventListener("submit", function(event){

event.preventDefault();

/* pega os dados */
let nome = document.getElementById("nome").value;

let email = document.getElementById("email").value;

let telefone = document.getElementById("telefone").value;

let assunto = document.getElementById("assunto").value;

let mensagem = document.getElementById("mensagem").value;


/* cria texto */
let texto = `Olá! Meu nome é ${nome}

Email: ${email}

Telefone: ${telefone}

Assunto: ${assunto}

Mensagem:
${mensagem}`;


/* número WhatsApp */
let numero = "+5547933842740";


/* abre WhatsApp */
window.open(

`https://wa.me/${numero}?text=${encodeURIComponent("Olá, gostaria de entrar em contato com a DIGA. Meu nome é " + nome + " e minha mensagem é: " + mensagem)}`,

"_blank"

);

});
