function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
    this.getQuestion = function () {
        return this.questions[this.questionIndex];
    }

    this.loadQuestions = function () {
        if (this.questionIndex == this.questions.length) {
            this.showScore();
        } else {
            let questionNode = document.getElementById("question");
            questionNode.innerText = this.getQuestion().name;

            let choices = this.getQuestion().choices;
            for (let i = 1; i <= choices.length; i++) {
                let choiceNode = document.getElementById("btn" + i);
                choiceNode.innerText = this.getQuestion().choices[i - 1];
                this.handleOptionBtn("btn" + i);
                this.showProgress();
            }
        }
    }

    this.showScore = function () {
        document.getElementById("title").innerText = "Result";
        document.getElementById("question").innerText = `Your score:${this.score} and percentage you got :${this.score / this.questionIndex * 100}%`;
        document.getElementById("buttons").style.display = "none";
        document.getElementById("progress").style.display = "none";
    }

    this.showProgress = function () {
        document.querySelector("#progress").innerText = `Question ${this.questionIndex + 1} of ${this.questions.length}`
    }

    this.checkAnswer = function (answer) {
        if (this.getQuestion().answer == answer) {
            this.score++;
        }
    }

    this.handleOptionBtn = function (btnId) {
        let btn = document.getElementById(btnId);
        let self = this;

        btn.onclick = function () {
            self.checkAnswer(btn.innerText);
            self.questionIndex++;
            self.loadQuestions();
        }
    }
}

function question(name, choices, answer) {
    this.name = name;
    this.choices = choices;
    this.answer = answer;
};

let questions = [
    new question("JavaScript supports-", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new question("Which is not a JavaScript Framework?", ["Python Script", "JQuery", "Django", "NodeJS"], "Django"),
    new question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new question("JavaScript is a", ["Language", "Programming Language", "Development", "All"], "Programming Language")
]

let quiz = new Quiz(questions);
quiz.loadQuestions();