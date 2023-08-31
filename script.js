const questions = [
    {
        question: "Apa warna kesukaan atika?",
        answer: [
            { text: "Merah", correct: false},
            { text: "Ungu", correct: true},
            { text: "LGBT", correct: false},
            { text: "Kuning", correct: false},
        ]
    },
    {
        question: "Apa makanan yang atika suka?",
        answer: [
            { text: "Babi guling", correct: false},
            { text: "Naga", correct: false},
            { text: "Tempe", correct: true},
            { text: "Titit kambing", correct: false},
        ]
    },
    {
        question: "Atika alumni dari?",
        answer: [
            { text: "TK(UH FH)", correct: true},
            { text: "Hogwarts School", correct: false},
            { text: "Harvard Univ", correct: false},
            { text: "Univ zimbabwe", correct: false},
        ]
    },
    {
        question: "Nama panggilan sayang atika pertama kali?",
        answer: [
            { text: "Bunda", correct: false},
            { text: "Becce", correct: false},
            { text: "Mother of dragon", correct: false},
            { text: "Ckt", correct: true},
        ]
    },
    {
        question: "Siapa nama calon suami atika?",
        answer: [
            { text: "DO jelek", correct: false},
            { text: "Exo plastik", correct: false},
            { text: "Prabowo pasti jadi presiden", correct: false},
            { text: "Acong paling ganteng", correct: true},
        ]
    },
    {
        question: "Apa hobinya acong?",
        answer: [
            { text: "Badminton", correct: false},
            { text: "Karate", correct: false},
            { text: "Mencintai atika", correct: true},
            { text: "PP Mars Bumi", correct: false},
        ]
    },
    {
        question: "Makanan kesukaan acong?",
        answer: [
            { text: "Ayam madu", correct: true},
            { text: "Tempe", correct: false},
            { text: "Tahu", correct: false},
            { text: "Kulit durian", correct: false},
        ]
    },
    {
        question: "Salah satu pola hidup sehat?",
        answer: [
            { text: "Minum kopi", correct: false},
            { text: "Ngemil", correct: false},
            { text: "Olahraga 3x seminggu", correct: true},
            { text: "Baring selamanya", correct: false},
        ]
    },
    {
        question: "Pemicu sakit kanker?",
        answer: [
            { text: "Junk food dan Gula", correct: true},
            { text: "Kunyit", correct: false},
            { text: "Bawang putih", correct: false},
            { text: "Gatot", correct: false},
        ]
    },
    {
        question: "Atika adalah?",
        answer: [
            { text: "Dino", correct: false},
            { text: "Angsa", correct: false},
            { text: "Ikan", correct: true},
            { text: "Cicak", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Skor benar ${score} dari ${questions.length} soal!! ANDA BUKAN ATIKA :'(`;
    if(score < questions.length){
    nextButton.innerHTML = "Coba lagi";
    nextButton.style.display = "block";
    }else{
        questionElement.innerHTML = `Yatawwa benar semuami cewekku the real IQ 400!!! <br>copy linknya = https://drive.google.com/file/d/1z5RM98SQXL2iSx<br>Yuj60FhAhdihN4ejz2/view?usp=sharing`;
    }
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();