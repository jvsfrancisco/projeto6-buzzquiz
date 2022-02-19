let chamandoTodosQuizzes = document.querySelector(".listaQuizz")

function criarQuizz(acionado){
const telaInicial=document.querySelector(".home")
telaInicial.classList.add("hidden")
}


function gerandoTodosQuizzes (){
    alert('alou')
    for(let i=0;i<10;i++){
        chamandoTodosQuizzes.innerHTML += `
        <div class="quizz">
            <p class="escritaBrancaQuizz"> Acerte os personagens corretos dos Simpsons e prove seu amor! </p>
            <img src="./images/simpsons.png">
        </div>
    `
    }
}
