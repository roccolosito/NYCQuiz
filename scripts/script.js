// Global Variable Assignment
var counter = 60;
var questions = [
    {
        title: "How many languages are spoken in NYC?",
        answers: ["800", "127", "232"],
        correctAnswer: 0,
    },
    {
        title: "What is the name of the group of people indigenous to NYC?",
        answers: ["Algonquin", "Apache", "Lenape"],
        correctAnswer: 2,
    },
    {
        title: "Who was known as the Father of Harlem?",
        answers: ["WEB DuBois", "Philip Payton, Jr.", "Malcolm X"],
        correctAnswer: 1,
    },
    {
        title: "The first African American to play on the MLB was on the Brooklyn Dodgers, what was his name?",
        answers: ["Willie Mays", "Barry Bonds", "Jackie Robinson"],
        correctAnswer: 2,
    },
];

$(document).ready(function () {

    // Timer Function, which kicks off when GO! is clicked and counts down from 60 (seconds)
    $("#start").click(function () {
        var interval = setInterval(function () {
            counter--;
            if (counter <= 0) {
                console.log("Timer 0 --> " + counter);
                return clearInterval(interval);
            } else {
                $('#time').text(counter);
                console.log("Timer --> " + counter);
            }
        }, 1000);
        $("#start").hide();
        $("#jumbotron").hide();
        $("#quiz").show();
        $("#blockquote").show();
        showQuestion();
    });

    function showQuestion() {
        var prompt = questions[currentQuestion].prompt;
        $("#quiz h2").text(prompt);
        $("#quiz ul").html("");
        for (var i = 0; i < parseInt(questions.length); i++) {
            var show = questions[currentQuestion].prompt[i];
            $("#quiz ul").append(`<li class="button-select" id="${i}">${show}</li>`);
        }
    }
})