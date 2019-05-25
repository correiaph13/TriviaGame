        
$(document).ready(function() {
    
function questionLayout () {
    //for every i (question) create a div containing it
    for (i=0; i<questions.length; i++){
    var newDivQ = $("<div class = 'questionContainer'>").text(questions[i].Q);
    var newDivA = $("<button class = 'answerA'>").text(questions[i].qAnswers.A);
    var newDivB = $("<button class = 'answerB'>").text(questions[i].qAnswers.B); 
    var newDivC = $("<button class = 'answerC'>").text(questions[i].qAnswers.C);
    var newDivD = $("<button class = 'answerD'>").text(questions[i].qAnswers.D);
    
    $(newDivQ).append(newDivA);
    $(newDivQ).append(newDivB);
    $(newDivQ).append(newDivC);
    $(newDivQ).append(newDivD);
    
    $('#questionsForm').append(newDivQ);

    var correctAnswers = [questions[i].correctA];

}   
}
questionLayout();
var userAnswers = [];

$("button").on("click", function(event){
    var userInput = $(this).attr("class");
    userAnswers.push(userInput);
    console.log(userAnswers);

    }); 

});