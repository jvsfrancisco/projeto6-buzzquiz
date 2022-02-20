let allquizz = document.querySelector(".listaQuizz")
const quizzPage = document.querySelector(".quizz-page")
const telaInicial = document.querySelector(".home");
let inputTitleQuizz;
let mainImage;
let numberQuestions;
let numberLevels;
function criarQuizz(acionado) {
    telaInicial.classList.add("disappear");
    const chamandoTela1 = document.querySelector(".screen1CreateQuizz");
    chamandoTela1.classList.remove("disappear");
}
// "titleQuizz"
// "urlImage"
// "numberQuestions"
//                 <input class="numberLevels" type="number" placeholder="  Quantidade de níveis do quizz"></input>
// "numberLevels"
function nextPage() {
    const tirandoTela1 = document.querySelector(".screen1CreateQuizz");
    tirandoTela1.classList.add("disappear");
    const chamandotela3 = document.querySelector(".screen2CreateQuizz");
    chamandotela3.classList.remove("disappear");
    const inputTitle = document.querySelector(".titleQuizz");
    inputTitleQuizz = inputTitle.value;
    const inputUrl = document.querySelector(".urlImage");
    mainImage = inputUrl.value;
    const inputQuestions = document.querySelector(".numberQuestions");
    numberQuestions = inputQuestions.value;
    const inputLevel = document.querySelector(".numberLevels");
    numberLevels = inputLevel.value;
    console.log(inputTitleQuizz)
    console.log(mainImage)
    console.log(numberQuestions)
    console.log(numberLevels)

}
function createLevels() {
    const tirandoTela2 = document.querySelector(".screen2CreateQuizz");
    tirandoTela2.classList.add("disappear");
    const chamandoTela2 = document.querySelector(".screen3CreateQuizz");
    chamandoTela2.classList.remove("disappear");
}
function endCreateQuizz() {
    const tirandoTela2 = document.querySelector(".screen3CreateQuizz");
    tirandoTela2.classList.add("disappear");
    const chamandoEndQuizz = document.querySelector(".screenQuizzEnd")
    chamandoEndQuizz.classList.remove("disappear")
}
function backInitialScreen() {
    const chamandoEndQuizz = document.querySelector(".screenQuizzEnd")
    chamandoEndQuizz.classList.add("disappear")
    telaInicial.classList.remove("disappear");

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
    console.log(telaInicial)
    telaInicial.classList.add("disappear")
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`)
    promise.then(openQuizzRender)
}

function openQuizzRender(quizz) {
    quizzPage.classList.remove("disappear")
    let arrayQuizz = quizz.data
    quizzPage.innerHTML += `<nav class="sub-header">
            <p>${arrayQuizz.title}</p>
        </nav>`
    let arrayQuestions = arrayQuizz.questions

    arrayQuestions.forEach(function (arrayQuestions) {
        quizzPage.innerHTML += `<nav class="questions">
            <article>
                <div class="question-title">
                    <p>${arrayQuestions.title}</p>
                </div>`

        let arrayAnswers = arrayQuestions.answers

        arrayAnswers.forEach(function (arrayAnswers) {
            quizzPage.innerHTML += `<div class="answer">
                        <div class="alternatives ${arrayAnswers.isCorrectAnswer}">
                            <img src="${arrayAnswers.image}" alt="simpson">
                            <p>${arrayAnswers.text}</p>
                        </div>`
        })
    })
    console.log(quizzPage)
}

