
var targetNumber = Math.floor(Math.random()*101+1);
var win = 0;
var loss = 0;
var button1 = Math.floor(Math.random() *12) +1;
var button2 = Math.floor(Math.random() *12) +1;
var button3 = Math.floor(Math.random() *12) +1;
var button4 = Math.floor(Math.random() *12) +1;
var userScore = 0;


function myFunction() {
    targetNumber =+ Math.floor(Math.random()*101+1);
    $("#targetNumber").html(targetNumber);
};



$("#button1").on("click", function() {
    button1 =+
    $("#crystalValue").html(button1);  
   
});



  

