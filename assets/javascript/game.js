
var targetNumber = Math.floor(Math.random()*101+1);
var win = 0;
var loss = 0;
var button1 = Math.floor(Math.random() *11) +1;
var button2 = Math.floor(Math.random() *11) +1;
var button3 = Math.floor(Math.random() *11) +1;
var button4 = Math.floor(Math.random() *11) +1;
var userScore = 0;


function myFunction() {
    targetNumber =+ Math.floor(Math.random() *101) +1;
    $("#targetNumber").html(targetNumber);
};


$("#button-1").on("click", function() {
    userScore += button1;
    $("#crystalValue").html(button1).hide();
    $("#userScore").html("Total Score: " + userScore);
});

$("#button-2").on("click", function() {
    userScore += button2;
    $("#crystalValue").html(button2).hide();
    $("#totScore").html("#crystalValue" + button2);
    $("#userScore").text("Total Score: " + userScore);
});

$("#button-3").on("click", function() {
    userScore += button3;
    $("#crystalValue").html(button3).hide();
    $("#userScore").text("Total Score: " + userScore);
});

$("#button-4").on("click", function() {
    userScore += button4;
    $("#crystalValue").html(button4).hide();
    $("#userScore").text("Total Score: " + userScore);
});






// if (result === randomNumber){
//     $("wins-lose").html("#win-lose");
//     wins++;
//     $("#wins").html(wins)
//   }

  

