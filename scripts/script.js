let sendQuizzApi={};
let allquizz = document.querySelector(".listaQuizz")
const quizzPage = document.querySelector(".quizz-page")
const telaInicial = document.querySelector(".home");
let inputTitleQuizz;
let mainImage;
let numberQuestions;
let numberLevels;
// página 2
let k=0;
let textQuestion=[k];
let colorQuestion=[k];
let correctAnswer=[k];
let urlImageCorrect=[k];
let incorrectAnswer1=[k];
let urlImage1=[k];
let incorrectAnswer2=[k];
let urlImage2=[k];
let incorrectAnswer3=[k];
let urlImage3=[k];
// página 3
let titleLevel=[k];
let porcentageMin=[k];
let imageLevel=[k];
let description=[k];

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
    textQuestion[k]=inputTextQuestions.value;
    const inputColor=document.querySelector(".colorQuestion")
    colorQuestion[k]= inputColor.value;
    const correct=document.querySelector(".correctAnswer")
    correctAnswer[k]= correct.value;
    const urlImage=document.querySelector(".urlImageCorrect")
    urlImageCorrect[k]= urlImage.value;
    const incorrectAnswerInput1=document.querySelector(".incorrectAnswer1")
    incorrectAnswer1[k]=incorrectAnswerInput1.value;
    const urlImage1Input=document.querySelector(".urlImage1")
    urlImage1[k]=urlImage1Input.value;
    const incorrectAnswerInput2=document.querySelector(".incorrectAnswer2")
    incorrectAnswer2[k]=incorrectAnswerInput2.value;
    const urlImage2Input=document.querySelector(".urlImage2")
    urlImage2[k]=urlImage2Input.value;
    const incorrectAnswerInput3=document.querySelector(".incorrectAnswer3")
    incorrectAnswer3[k]=incorrectAnswerInput3.value;
    const urlImage3Input=document.querySelector(".urlImage3")
    urlImage3[k]=urlImage3Input.value;
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
    titleLevel[k] = inputTitleLevel.value;
    const inputPorcentageMin= document.querySelector(".porcentageMin")
    porcentageMin[k]=inputPorcentageMin.value;
    const inputImageLevel= document.querySelector(".imageLevel")
    imageLevel[k]=inputImageLevel.value;
    const inputDescription= document.querySelector(".description")
    description[k]=inputDescription.value;
    console.log(description)
    chamandoCapaQuizz();
    sendApi();
    const promisse=axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes",sendQuizzApi)
    promisse.then(deuBom)
    promisse.catch(deuRuim)
}
function deuBom(bom){
    alert("Seu quizz foi criado com sucesso, se divirta!!");
}
function deuRuim(ruim){
    alert("algum procedimento foi feito inadequadamente, por favor, tente novamente :)");
}

function generatorQuestion(){
    for (let i=2; i<=(numberQuestions);i++) {
    let box=document.querySelector(".answerWait")
    box.innerHTML +=`
    <div class="boxAnswerWait ${i}">
                    <span class="title box">Pergunta ${i}</span>
                    <img onclick="tentandoFazerOutrasPerguntas(this);"src="./images/Vector.png" />
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

function chamandoCapaQuizz(){
const box=document.querySelector(".screensCreateQuizz")
    box.innerHTML=`<div class="screenQuizzEnd ">
    <span class="title top">Seu quizz está pronto!</span>
<div class="quizz">
    <p class="escritaBrancaQuizz">${inputTitleQuizz}</p>
    <img src="${mainImage}">
</div>
<button class="proximaPagina acessQuizz">Acessar Quizz</button>
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
function tiratela1(){
    const tirandoTela1 = document.querySelector(".screen1CreateQuizz");
    tirandoTela1.classList.add("disappear");
}
function screen2(){ 
    k++;
    const listScreens=document.querySelector(".screensCreateQuizz")
    listScreens.innerHTML=`
    <div class="screen2CreateQuizz ">
            <span class="title top">Crie suas perguntas</span>
            <div class="whiteBoard telaAdaptavel">
                <span class="title box">Pergunta ${k}</span>
                <input class="textQuestion"data-identifier="question" type="text" placeholder="  Texto da pergunta"></input>
                <input class="colorQuestion"data-identifier="question" type="text" placeholder="  Cor de fundo da pergunta"></input>
                <span class="title box">Resposta correta</span>
                <input class="correctAnswer"data-identifier="question" type="text" placeholder="  Resposta correta"></input>
                <input class="urlImageCorrect"data-identifier="question" type="url" placeholder="  URL da imagem"></input>
                <span class="title box">Respostas incorretas</span>
                <div class="answerImage">
                    <input class="incorrectAnswer1"data-identifier="question" type="text" placeholder="  Resposta incorreta 1"></input>
                    <input class="urlImage1" type="url"data-identifier="question" placeholder="  URL da imagem 1"></input>
                </div>
                <div class="answerImage">
                    <input class="incorrectAnswer2" data-identifier="question" type="text" placeholder="  Resposta incorreta 2"></input>
                    <input class="urlImage2" type="url"data-identifier="question" placeholder="  URL da imagem 2"></input>
                </div>
                <div class="answerImage">
                    <input class="incorrectAnswer3" data-identifier="question" type="text" placeholder="  Resposta incorreta 3"></input>
                    <input class="urlImage3" data-identifier="question" type="url" placeholder="  URL da imagem 3"></input>
                </div>
            </div>
            <div class="whiteBoard answerWait">
            
            </div>
            <button class="proximaPagina levels" onclick="createLevels();">Prosseguir pra criar níveis</button>

        </div>`
        console.log(textQuestion[k])
    console.log(colorQuestion[k])
    console.log(correctAnswer[k])
    console.log(urlImageCorrect[k])
}
function screen3(){
    const listScreens=document.querySelector(".screensCreateQuizz")
listScreens.innerHTML=`  <div class="screen3CreateQuizz ">
<span class="title top">Agora, decida os níveis!</span>
<div class="whiteBoard telaAdaptavel">
    <span  class="title box">Nível 1</span>
    <input data-identifier="level" class="titleLevel" type="text" placeholder="  Título do nível"></input>
    <input data-identifier="level" class="porcentageMin" type="number" placeholder="  % de acerto mínima"></input>
    <input data-identifier="level"  class="imageLevel" type="url" placeholder="  URL da imagem do nível"></input>
    <textarea data-identifier="expand" class="description" placeholder=" Descrição do nível"></textarea>
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
        image: `${mainImage}`,
        questions: [
            {
                title: `${textQuestion[k]}`,
                color: `${colorQuestion[k]}`,
                answers: [
                    {
                        text: `${correctAnswer[k]}`,
                        image: `${urlImageCorrect[k]}`,
                        isCorrectAnswer: true
                    },
                    {
                        text: `${incorrectAnswer1[k]}`,
                        image: `${urlImage1[k]}`,
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: `${ textQuestion[k]}`,
                color: `${colorQuestion[k]}`,
                answers: [
                    {
                        text: `${correctAnswer[k]}`,
                        image: `${urlImageCorrect[k]}`,
                        isCorrectAnswer: true
                    },
                    {
                        text: `${incorrectAnswer1[k]}`,
                        image: `${urlImage1[k]}`,
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: `${textQuestion[k]}`,
                color: `${colorQuestion[k]}`,
                answers: [
                    {
                        text: `${incorrectAnswer1[k]}`,
                        image: `${urlImage1[k]}`,
                        isCorrectAnswer: true
                    },
                    {
                        text: `${incorrectAnswer2[k]}`,
                        image: `${urlImage2[k]}`,
                        isCorrectAnswer: false
                    }
                ]
            }
        ],
        levels: [
            {
                title: `${titleLevel[k]}`,
                image: `${imageLevel[k]}`,
                text: `${description[k]}`,
                minValue:  `${porcentageMin[k]}`
            },
            {
                title: `${titleLevel[k]}`,
                image: `${imageLevel[k]}`,
                text: `${description[k]}`,
                minValue: `${porcentageMin[k]}`
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
        tiratela1();
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
    <div class="quizz" data-identifier="quizz-card" onclick="openQuizz(${quizz.id})">
        <p class="escritaBrancaQuizz"> ${quizz.title} </p>
        <img src="${quizz.image}" alt = "">
    </div>
`
}

function openQuizz(id) {
    telaInicial.classList.add("disappear")
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`)
    promise.then(openQuizzRender)
    promise.catch(openQuizzError)
}

function openQuizzRender(quiz) {

const title = quiz.data.title;
const image = quiz.data.image;

let arrayQuestions = quiz.data.questions;

const quizzPage = document.querySelector(".quizz-page");
    quizzPage.innerHTML += `<article class="sub-header"> 
        <p>${title}</p>
    </article>`;

const banner = document.querySelector(".sub-header");
banner.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`;

    for(let i = 0 ; i < arrayQuestions.length; i++){

        quizzPage.innerHTML += `<article class="questions"> </article>`
        const quests = document.querySelector(".questions:last-child") ;
        quests.innerHTML+= `<div class="question-title" style="background-color:${arrayQuestions[i].color}">
        <p>${arrayQuestions[i].title}</p>
    </div>
    <div class= "answer"> </div>`;
        let answers = arrayQuestions[i].answers;
        answers.sort(randomize);


        for(let j = 0; j < answers.length; j++) { 
            let alternatives = document.querySelector(".questions:last-child .answer");
            console.log(alternatives)
            alternatives.innerHTML += `<div class="alternatives" onclick="chooseAlternative(${answers[j].isCorrectAnswer},this,${i})">
                                    <img src="${answers[j].image}" alt="simpson">
                                    <p>${answers[j].text}</p>
                                </div>`;
        }                       
    }
}

function randomize() { 
	return Math.random() - 0.5; 
}

function openQuizzError(error){
    console.log(error)
    alert("Ops, aconteceu algum problema... :(")
}

function chooseAlternative(correct, alternative, index) {
    quizzPage.innerHTML += `<div class = "results"> </div>`
    const allAlternatives = document.querySelector(`.questions:nth-child(${index}) .answer`)
    alternative.classList.add(".choiced")
    console.log(allAlternatives)
    // for(let i = 0; i < allAlternatives.length; i++) {
    //     if(!allAlternatives[i].classList.contain(".choiced")){
    //         allAlternatives[i].classList.add(".other-choice")
    //     }
    //     if(arrayQuestions[index].answers[i].isCorrectAnswer){
    //         allAlternatives[i].classList.add(".correct")
    //     }
    //     else{
    //         allAlternatives[i].classList.add(".wrong")
    //     }

    // }

}