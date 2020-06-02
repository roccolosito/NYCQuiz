$(document).ready(function () {

    var counter = 60;

    $("#start").click(function () {
        var interval = setInterval(function () {
            counter--;
            if (counter <= 0) {
                clearInterval(interval);
                return;
            } else {
                $('#time').text(counter);
                console.log("Timer --> " + counter);
            }
        }, 1000);
        $("#start").hide();
        $("#jumbotron").hide();
    });

    // -> ...while appending remaining time in seconds to the resulted score of the user

    function timeUp() {
        $("#timer").text("expired!");
        $(".quiz").hide();
        $(".scoreContainer").show();
        $("#scoreNumber").append(secondsLeft);
        clearInterval(xInterval);
    };
})