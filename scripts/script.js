function criarQuizz(acionado){
const telaInicial=document.querySelector(".home")
telaInicial.classList.add("hidden")
}

gerandoTodosQuizzes ();
function gerandoTodosQuizzes (){
    let chamandoTodosQuizzes= document.querySelector(".listaQuizz")
    for(let i=0;i<10;i++){
     let chamandoTodosQuizzesHTML= `
     <div class="quizz">
     <p class="escritaBrancaQuizz">Acerte os personagens corretos dos Simpsons e prove seu amor! </p>
     <img src="./images/simpsons.png">
     </div>
     `
     chamandoTodosQuizzes.innerHTML += chamandoTodosQuizzesHTML;
     console.log("25")
    }
}