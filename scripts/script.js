function criarQuizz(acionado){
const telaInicial=document.querySelector(".home")
telaInicial.classList.add("hidden")
}

gerandoTodosQuizzes ();
function gerandoTodosQuizzes (){
    for(let i=0;i<10;i++){
        const chamandoTodosQuizzes= document.querySelector(".listaQuizz")
     chamandoTodosQuizzesHTML= `
     <div class="quizz">
     <p class="escritaBrancaQuizz">Acerte os personagens corretos dos Simpsons e prove seu amor! </p>
     <img src="./images/simpsons.png">
     </div>
     `
     chamandoTodosQuizzes.innerHTML  += chamandoTodosQuizzesHTML;
}
}