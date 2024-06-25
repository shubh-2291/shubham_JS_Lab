let question = document.getElementById("question");
let option1 = document.getElementById("choice0");
let option2 = document.getElementById("choice1");
let option3 = document.getElementById("choice2");
let option4 = document.getElementById("choice3");


let optionBtn1 = document.getElementById("btn0");
let optionBtn2 = document.getElementById("btn1");
let optionBtn3 = document.getElementById("btn2");
let optionBtn4 = document.getElementById("btn3");

let questionProgress = document.getElementById("progress");

let score = 0;

const questions = [
    {
        name: "JavaScript supports",
        op1: "Functions",
        op2: "XHTML",
        op3: "CSS",
        op4: "HTML",
        ans: "Functions"
    },
    {
        name: "Which language is used for styling web pages?",
        op1: "HTML",
        op2: "JQuery",
        op3: "CSS",
        op4: "XML",
        ans: "CSS"
    },
    {
        name: "Which is not a JavaScript Framework?",
        op1: "Python Script",
        op2: "JQuery",
        op3: "Django",
        op4: "NodeJS",
        ans: "Django"
    },
    {
        name: "Which is used for Connect To Database?",
        op1: "PHP",
        op2: "HTML",
        op3: "JS",
        op4: "All",
        ans: "PHP"
    },
    {
        name: "JavaScript is a",
        op1: "Language",
        op2: "Programming Language",
        op3: "Development",
        op4: "All",
        ans: "Programming Language"
    }
]
// console.log(questions[0].name);
var questionIndex = 0;
function loadQuestion() {

    question.innerText = questions[questionIndex].name;
    option1.innerText = questions[questionIndex].op1;
    option2.innerText = questions[questionIndex].op2;
    option3.innerText = questions[questionIndex].op3;
    option4.innerText = questions[questionIndex].op4;
    questionProgress.innerText = `Question ${questionIndex + 1} of ${questions.length}`
}

loadQuestion();

let answer = "";

function getAns() {
    optionBtn1.addEventListener('click', function () {
        answer = option1.innerText
        console.log(answer);

        checkAns(answer);

    });
    optionBtn2.addEventListener("click", function () {
        answer = option2.innerText
        console.log(answer);

        checkAns(answer);


    });
    optionBtn3.addEventListener("click", function () {
        answer = option3.innerText
        console.log(answer);

        checkAns(answer);
    });
    optionBtn4.addEventListener("click", function () {
        answer = option4.innerText
        console.log(answer);
        checkAns(answer);

    });


}
function checkAns(answer) {
    if (answer === questions[questionIndex].ans) {
        score++;
    }
    questionIndex++;
    if (questionIndex > questions.length - 1) {
        showResult(score, questions.length);
    } else {
        loadQuestion();
    }
}


function showResult(score, numberOfQuestion) {
    document.getElementById("title").innerText = "Result";
    question.innerText = `Your score is: ${score} and percentage you got: ${score / numberOfQuestion * 100}%`;
    document.querySelector(".buttons").style.display = "none";
    questionProgress.style.display = "none";
}

getAns();