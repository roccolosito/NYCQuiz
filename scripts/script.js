$(document).ready(function () {

    // start time for counter
    var counter = 60;

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

    function showQuestion() {
        var prompt = questions[currentQuestion].prompt;
        $("#quiz h2").text(prompt);
        $("#quiz ul").html("");
        for (var i = 0; i < parseInt(questions.length); i++) {
            var show = questions[currentQuestion].prompt[i];
            $("#quiz ul").append(`<li class="button-select" id="${i}">${show}</li>`);
        }

        var questions = [
            {
                prompt: "How many languages are spoken in NYC?\n(a) 800\n(b) 127\n(c) 232",
                answer: "a"
            },
            {
                prompt: "What is the name of the group of people indigenous to NYC?\n(a) Algonquin\n(b) Apache\n(c) Lenape",
                answer: "c"
            },
            {
                prompt: "Who was known as the Father of Harlem?\n(a) WEB DuBois\n(b) Philip Payton Jr\n(c) Malcolm X",
                answer: "b",
            },
            {
                prompt: "The first African American to play on the MLB was on the Brooklyn Dodgers, what was his name?\n(a) Willie Mays\n(b) Barry Bonds\n(c) Jackie Robinson",
                answer: "c",
            },
        ];

        // var score = 0;

        // for (var i = 0; i < questions.length; i++) {
        //     var response = questions[i].prompt;
        //     if (response == questions[i].answer) {
        //         score++;
        //         alert("Got it!");
        //     } else {
        //         alert("Nope!");
        //     }
        // }
        // alert("you got " + score + "/" + questions.length);

    }
})