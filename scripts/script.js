let allquizz = document.querySelector(".listaQuizz")
const quizzPage = document.querySelector(".quizz-page")
const telaInicial = document.querySelector(".home")


function criarQuizz(acionado) {
    telaInicial.classList.add("disappear");
    const chamandoTela1= document.querySelector(".screen1CreateQuizz");
    chamandoTela1.classList.remove("disappear");
}
function nextPage(){
    const tirandoTela1= document.querySelector(".screen1CreateQuizz");
    tirandoTela1.classList.add("disappear");
    const chamandotela3=document.querySelector(".screen2CreateQuizz");
    chamandotela3.classList.remove("disappear");

}
function createLevels(){
    const tirandoTela2=document.querySelector(".screen2CreateQuizz");
    tirandoTela2.classList.add("disappear");
    const chamandoTela2=document.querySelector(".screen3CreateQuizz");
    chamandoTela2.classList.remove("disappear");
}
function endCreateQuizz(){
    const tirandoTela2=document.querySelector(".screen3CreateQuizz");
    tirandoTela2.classList.add("disappear");
    const chamandoEndQuizz= document.querySelector(".screenQuizzEnd")
    chamandoEndQuizz.classList.remove("disappear")
}

homePageRender()

function homePageRender() {
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    promise.then(quizGenerator);
}

function quizGenerator(quizz) {
    let arrayquizz = quizz.data
    arrayquizz.forEach(quizzGeral);
}

// function QuizzUsuario(message){
//     chat.innerHTML += `
//     <li class="public">
//         <span>
//             <time>(${message.time})  </time>
//             <strong>${message.from}</strong>
//             para
//             <strong>${message.to}</strong>:
//             ${message.text}
//         </span>
//     </li>
//     `
// }

function quizzGeral(quizz) {
    allquizz.innerHTML += `
    <div class="quizz" onclick="openQuizz(${quizz.id})">
        <p class="escritaBrancaQuizz"> ${quizz.title} </p>
        <img src="${quizz.image}" alt = "">
    </div>
`
}

function openQuizz(id) {
    telaInicial.classList.add("disappear")
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`)
    promise.then(openQuizzRender)
    // promise.catch(error)
}

function openQuizzRender(quiz) {

const tituloQuizz = quiz.data.title;
const imagemCapaQuizz = quiz.data.image;
let perguntas = quiz.data.questions;
const quizzPage = document.querySelector(".quizz-page");
    quizzPage.innerHTML += `<article class="sub-header"> 
        <p>${tituloQuizz}</p>
    </article>`;

const exibirCapaQuizz = document.querySelector(".sub-header");
exibirCapaQuizz.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imagemCapaQuizz})`;

    for(let i = 0 ; i < perguntas.length; i++){
        quizzPage.innerHTML += `<article class="questions"> </article>`
        const quests = document.querySelector(".questions:last-child") ;
        quests.innerHTML+= `<div class="question-title" style="background-color:${perguntas[i].color}">
        <p>${perguntas[i].title}</p>
    </div>
    <div class= "answer"> </div>`;
        let respostas = perguntas[i].answers;
        respostas.sort(randomize);


        for(let j = 0; j < respostas.length; j++) { 
            let alternativas = document.querySelector(".questions:last-child .answer");
            alternativas.innerHTML += `<div class="alternatives ${respostas[j].isCorrectAnswer}">
                                    <img src="${respostas[j].image}" alt="simpson">
                                    <p>${respostas[j].text}</p>
                                </div>`;
        }                       
    }
}

function randomize() { 
	return Math.random() - 0.5; 
}







    // quizzPage.innerHTML += `<nav class="sub-header">
    //         <p>${arrayQuizz.title}</p>
    //     </nav>`
    // let arrayQuestions = arrayQuizz.questions

    // arrayQuestions.forEach(function (arrayQuestions) {
    //     quizzPage.innerHTML += `<nav class="questions"> </nav>`

    //     let questions = document.querySelector(".questions")
    //     questions.innerHTML += `<div class="question-title">
    //     <p>${arrayQuestions.title}</p>
    //     </div>
    //     <div class = "questions"> </div>`
    //     let i = 0
    //     i ++
    //     let arrayAnswers = arrayQuestions.answers

    //     arrayAnswers.forEach(function (arrayAnswers) {
    //         let i = 0
    //         i ++
    //         let alternatives = document.querySelector(".questions")
    //         alternatives.innerHTML += `
    //                     <div class="alternatives ${arrayAnswers.isCorrectAnswer}">
    //                         <img src="${arrayAnswers.image}" alt="simpson">
    //                         <p>${arrayAnswers.text}</p>
    //                     </div>`
    //     })
    // })
    // console.log(quizzPage)