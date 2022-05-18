const quizData = [
    {
        question: 'What is Capital City of India?',
        a: 'Mumbai',
        b: 'Delhi',
        c: 'Bengaluru',
        d: 'Chennai',
        correct: 'b'
    },

    {
        question: 'Which country sent a man to moon first?',
        a: 'India',
        b: 'UK',
        c: 'USSR',
        d: 'USA',
        correct: 'd'
    },

    {
        question: 'Who won oscars for best actor in 2022?',
        a: 'Will Smith',
        b: 'Jason Momoa',
        c: 'Dwyane Jhonson',
        d: 'Brad Pitt',
        correct: 'a'
    },

    {
        question: 'What is the birth place of Manny Pacquiao?',
        a: 'Vietnam',
        b: 'Nepal',
        c: 'Philippines',
        d: 'Indonesia',
        correct: 'c'
    },

    {
        question: 'When was Javascript launched?',
        a: '1996',
        b: '2001',
        c: '2015',
        d: '1995',
        correct: 'd'
    }
]

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function getSelected() {

    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;

}

function loadQuiz() {

    deSelectAnswers()

    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;




}

function deSelectAnswers() {


    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

submitBtn.addEventListener('click', () => {


    const answer = getSelected();
    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h1>Your Score: ${score}/${quizData.length}</h1>
            <button class="btnbtn" onClick="location.reload()">Reload</button>`;
        }
    }




});