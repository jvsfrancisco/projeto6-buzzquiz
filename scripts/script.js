let sendQuizzApi={};
let allquizz = document.querySelector(".listaQuizz")
const quizzPage = document.querySelector(".quizz-page")
const telaInicial = document.querySelector(".home");
let inputTitleQuizz;
let mainImage;
let numberQuestions;
let numberLevels;
// página 2
let textQuestion;
let colorQuestion;
let j=0;
let correctAnswer=[j];
let urlImageCorrect=[j];
let incorrectAnswer1=[j];
let urlImage1=[j];
let incorrectAnswer2=[j];
let urlImage2=[j];
let incorrectAnswer3=[j];
let urlImage3=[j];
// página 3
let titleLevel;
let porcentageMin;
let imageLevel;
let description;
function criarQuizz(acionado) {
    telaInicial.classList.add("disappear");
    const chamandoTela1 = document.querySelector(".screen1CreateQuizz");
    screen1();
}
function nextPage() {
    const chamandotela3 = document.querySelector(".screen2CreateQuizz");
    const inputTitle = document.querySelector(".titleQuizz");
    inputTitleQuizz = inputTitle.value;
    const inputUrl = document.querySelector(".urlImage");
    mainImage = inputUrl.value;
    const inputQuestions = document.querySelector(".numberQuestions");
    numberQuestions = inputQuestions.value;
    const inputLevel = document.querySelector(".numberLevels");
    numberLevels = inputLevel.value;
    checkInformation();

}
function createLevels() {
    const tirandoTela2 = document.querySelector(".screen2CreateQuizz");
    tirandoTela2.classList.add("disappear");
    const chamandoTela2 = document.querySelector(".screen3CreateQuizz");
    const inputTextQuestions=document.querySelector(".textQuestion")
    textQuestion=inputTextQuestions.value;
    const inputColor=document.querySelector(".colorQuestion")
    colorQuestion= inputColor.value;
    const correct=document.querySelector(".correctAnswer")
    correctAnswer[j]= correct.value;
    const urlImage=document.querySelector(".urlImageCorrect")
    urlImageCorrect[j]= urlImage.value;
    const incorrectAnswerInput1=document.querySelector(".incorrectAnswer1")
    incorrectAnswer1[j]=incorrectAnswerInput1.value;
    const urlImage1Input=document.querySelector(".urlImage1")
    urlImage1[j]=urlImage1Input.value;
    const incorrectAnswerInput2=document.querySelector(".incorrectAnswer2")
    incorrectAnswer2[j]=incorrectAnswerInput2.value;
    const urlImage2Input=document.querySelector(".urlImage2")
    urlImage2[j]=urlImage2Input.value;
    const incorrectAnswerInput3=document.querySelector(".incorrectAnswer3")
    incorrectAnswer3[j]=incorrectAnswerInput3.value;
    const urlImage3Input=document.querySelector(".urlImage3")
    urlImage3[j]=urlImage3Input.value;
    screen3();
    generatorLevel();
    console.log(correctAnswer[0])
}
function endCreateQuizz() {
    const tirandoTela2 = document.querySelector(".screen3CreateQuizz");
    tirandoTela2.classList.add("disappear");
    const chamandoEndQuizz = document.querySelector(".screenQuizzEnd")
    // chamandoEndQuizz.classList.remove("disappear")
    const inputTitleLevel = document.querySelector(".titleLevel")
    titleLevel = inputTitleLevel.value;
    const inputPorcentageMin= document.querySelector(".porcentageMin")
    porcentageMin=inputPorcentageMin.value;
    const inputImageLevel= document.querySelector(".imageLevel")
    imageLevel=inputImageLevel.value;
    const inputDescription= document.querySelector(".description")
    description=inputDescription.value;
    console.log(description)
    chamandoCapaQuizz();
    sendApi();

}
function generatorQuestion(){
 for (let i=2; i<=(numberQuestions);i++) {
    let box=document.querySelector(".answerWait")
    box.innerHTML +=`
    <div class="boxAnswerWait">
                    <span class="title box">Pergunta ${i}</span>
                    <img src="./images/Vector.png" />
                </div>`
 }

} 
function generatorLevel(){
    for (let i=2; i<=(numberLevels);i++) {
        let box=document.querySelector(".levelBox")
        box.innerHTML +=`
        <div class="boxAnswerWait">
                <span class="title box">Nível ${i}</span>
                <img onclick="" src="./images/Vector.png" />
            </div>`
        
     }
}
function acessQuizz(){


}
function chamandoCapaQuizz(){
const box=document.querySelector(".screensCreateQuizz")
 box.innerHTML=`<div class="screenQuizzEnd ">
 <span class="title top">Seu quizz está pronto!</span>
 <div class="quizz">
     <p class="escritaBrancaQuizz">${inputTitleQuizz}</p>
     <img src="${mainImage}">
 </div>
 <button class="proximaPagina acessQuizz" onclick="acessQuizz();">Acessar Quizz</button>
 <p class="escritaBoxCriarQuizz backHome" onclick="backInitialScreen();">Voltar pra home</p>
 
</div`
}

function screen1(){
const listScreens=document.querySelector(".screensCreateQuizz")
 listScreens.innerHTML=`    <div class="screen1CreateQuizz  ">
    <span class="title top">Comece pelo começo</span>
    <div class="whiteBoard tela1">
        
        <input class="titleQuizz" type="text" placeholder="  Título do seu quizz"></input>
        <input class="urlImage" type="url" placeholder="  URL da imagem do seu quizz"></input>
        <input class="numberQuestions" type="number" placeholder="  Quantidade de perguntas do quizz"></input>
        <input class="numberLevels" type="number" placeholder="  Quantidade de níveis do quizz"></input>
    </div>
    <button class="proximaPagina" onclick="nextPage();">Prosseguir pra criar perguntas</button>
</div>`
}
function screen2(){
    const tirandoTela1 = document.querySelector(".screen1CreateQuizz");
    tirandoTela1.classList.add("disappear");
    const listScreens=document.querySelector(".screensCreateQuizz")
    listScreens.innerHTML=`
    <div class="screen2CreateQuizz ">
            <span class="title top">Crie suas perguntas</span>
            <div class="whiteBoard telaAdaptavel">
                <span class="title box">Pergunta 1</span>
                <input class="textQuestion" type="text" placeholder="  Texto da pergunta"></input>
                <input class="colorQuestion" type="text" placeholder="  Cor de fundo da pergunta"></input>
                <span class="title box">Resposta correta</span>
                <input class="correctAnswer" type="text" placeholder="  Resposta correta"></input>
                <input class="urlImageCorrect" type="url" placeholder="  URL da imagem"></input>
                <span class="title box">Respostas incorretas</span>
                <div class="answerImage">
                    <input class="incorrectAnswer1" type="text" placeholder="  Resposta incorreta 1"></input>
                    <input class="urlImage1" type="url" placeholder="  URL da imagem 1"></input>
                </div>
                <div class="answerImage">
                    <input class="incorrectAnswer2" type="text" placeholder="  Resposta incorreta 2"></input>
                    <input class="urlImage2" type="url" placeholder="  URL da imagem 2"></input>
                </div>
                <div class="answerImage">
                    <input class="incorrectAnswer3" type="text" placeholder="  Resposta incorreta 3"></input>
                    <input class="urlImage3" type="url" placeholder="  URL da imagem 3"></input>
                </div>
            </div>
            <div class="whiteBoard answerWait">
            
            </div>
            <button class="proximaPagina levels" onclick="createLevels();">Prosseguir pra criar níveis</button>

        </div>`

}
function screen3(){
    const listScreens=document.querySelector(".screensCreateQuizz")
listScreens.innerHTML=`  <div class="screen3CreateQuizz ">
<span class="title top">Agora, decida os níveis!</span>
<div class="whiteBoard telaAdaptavel">
    <span class="title box">Nível 1</span>
    <input class="titleLevel" type="text" placeholder="  Título do nível"></input>
    <input class="porcentageMin" type="number" placeholder="  % de acerto mínima"></input>
    <input class="imageLevel" type="url" placeholder="  URL da imagem do nível"></input>
    <textarea class="description" placeholder=" Descrição do nível"></textarea>
</div>
<div class="whiteBoard answerWait levelBox">
</div>
<button class="proximaPagina endQuizz" onclick="endCreateQuizz();">Finalizar Quizz</button>
</div>
`  
}
function sendApi(){
    sendQuizzApi={
        title:`${inputTitleQuizz}`,
        color:`${colorQuestion}`,
        answers:[{
            text:`${correctAnswer}`,
            image:`${urlImageCorrect}`,
            isCorrectAnswer: true       
        },
    {
        text: `${incorrectAnswer1}`,
		image: `${urlImage1}`,
		isCorrectAnswer: false
    }
    
    ]
    }
     console.log(sendQuizzApi.title)
}
function backInitialScreen() {
    const disappearBoxCriarQuizz=document.querySelector(".boxCriarQuizz")
    disappearBoxCriarQuizz.classList.add("disappear");
    const quizzUsuario=document.querySelector(".primeiraQuizzUsuario")
    quizzUsuario.classList.add("disappear")
    const chamandoEndQuizz = document.querySelector(".screenQuizzEnd")
    chamandoEndQuizz.classList.add("disappear")
        telaInicial.classList.remove("disappear");
    const showQuizzUsuario=document.querySelector(".quizzUsuario")
    showQuizzUsuario.classList.remove("disappear")
     const showQuizzes=document.querySelector(".listaSeusQuizzes")
    showQuizzes.innerHTML+=` <div class="quizz">
    <p class="escritaBrancaQuizz">${inputTitleQuizz}</p>
    <img src="${mainImage}">
</div>`
    }
function checkInformation(){
    if (!(inputTitleQuizz.length >= 20 && inputTitleQuizz.length <= 65)) {
        alert("O titulo tem que ter entre 20 e 65 caracteres");   
    }
    if (numberQuestions < 3) {
        alert("A quantidade de perguntas tem de ser ao menos 3");
    }
    if (numberLevels < 2) {
        alert("A quantidade de niveis tem de ser ao menos 2");
    }
    if ((inputTitleQuizz.length >= 20 && inputTitleQuizz.length <= 65) && (numberQuestions >= 3) && (numberLevels >= 2)) {
        screen2();
        generatorQuestion();
    }
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

