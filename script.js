var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    var selectedBtn = $("#" + randomChosenColour);

    selectedBtn.animate({opacity: 0.1});
    selectedBtn.animate({opacity: 1});

    var audio = new Audio("/sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

$(document).ready(function() {
    nextSequence();
})
    



