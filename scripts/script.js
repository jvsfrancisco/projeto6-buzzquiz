let allquizz = document.querySelector(".listaQuizz")
const telaInicial = document.querySelector(".home")
let quizzPage = document.querySelector(".quizz-page")


function criarQuizz(acionado) {
    telaInicial.classList.add("disappear")
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
}

function openQuizzRender(quizz) {
    // quizzPage.classList.remove("disappear")
    console.log(quizz.data)
    console.log(quizzPage)

    let arrayQuizz = quizz.data

    quizzPage.innerHTML += `<nav class="sub-header">
            <p>${arrayQuizz.title}</p>
        </nav>`
    let arrayQuestions = arrayQuizz.questions

    arrayQuestions.forEach(function () {
        quizzPage.innerHTML += `<nav class="questions">
            <article>
                <div class="question-title">
                    <p>${arrayQuestions.title}</p>
                </div>`

        let arrayAnswers = arrayQuizz.questions.answers

        arrayAnswers.forEach(function (){
            quizzPage.innerHTML += `<div class="answer">
                        <div class="alternatives ${arrayAnswers.isCorrectAnswer}">
                            <img src="${arrayAnswers.image}" alt="simpson">
                            <p>${arrayAnswers.text}</p>
                        </div>`
        })
        quizzPage.innerHTML += `</article>
                            </nav>`
    })
}


