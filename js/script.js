let atual = 0;

const imagens =
document.querySelectorAll(".carrossel img");


function abrirGaleria(){

document
.getElementById("meuCarrossel")
.style.display="flex";

}


function fecharGaleria(){

document
.getElementById("meuCarrossel")
.style.display="none";

}


function mudar(direcao){

imagens[atual]
.classList.remove("ativo");

atual += direcao;


if(atual >= imagens.length){

atual = 0;

}


if(atual < 0){

atual = imagens.length - 1;

}


imagens[atual]
.classList.add("ativo");

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
