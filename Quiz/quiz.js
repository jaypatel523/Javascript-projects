let score = document.querySelector(".score span");
let wrong = document.querySelector(".wrong span");

let start = document.querySelector(".start");
start.addEventListener("click", function () {


    // fetch question from api

    fetchQuestion();


    let questionPart = document.querySelector(".q-part");
    questionPart.style.display = "block";
    start.style.display = "none";


})








function fetchQuestion() {
    fetch("questions.json")
        .then((response) => response.json())
        .then((data) => setQuestion(data));

}

function setQuestion(data) {
    // console.log(data);
    let question = document.querySelector(".question");
    question.textContent = data[0].question;










}




