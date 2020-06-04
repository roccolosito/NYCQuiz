// Global Variable Assignment
var counter = 60;
var currentQuestion = 0;
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
        showQuestion();
    });

    $(".answer").on("click", checkAnswer);
    
    $("#restart").on("click", restartGame);

    function showQuestion() {
        $("#quiz h2").text(questions[currentQuestion].title);

        $("#quiz .answerA").text(questions[currentQuestion].answers[0]);
        $("#quiz .answerB").text(questions[currentQuestion].answers[1]);
        $("#quiz .answerC").text(questions[currentQuestion].answers[2]);
        $("#box").show();
        $("#answer-status").hide();
        timer = 60;
        countDown = setInterval(counter, 1000);
        console.log(questions[currentQuestion].answers);
    }



    function checkAnswer() {

        stopCounter();
        console.log("clicked")
        guess = parseInt($(this).attr("value"))
        let correctAnswer = questions[currentQuestion].correct;

        if (guess === correctAnswer) {


            rightAnswers++;
            $("#answer-result").text("Correct Answer!!");
            $("#correct-answer").text("");
            setImage("sheldonright.gif");
        } else {
            wrongAnswers++;
            $("#answer-result").text("Sorry, Wrong Answer.")
            $("#correct-answer").text("Correct answer was : " + questions[currentQuestion].answers[questions[currentQuestion].correct])

            setImage("pennywrong.gif");
        }

        currentQuestion++;




        if (currentQuestion === questions.length) {
            $("#box").hide();
            setTimeout(showResults, 2000);


        } else {
            $("#box").hide();
            setTimeout(showQuestion, 2000);
        }
    }

})