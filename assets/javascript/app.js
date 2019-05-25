        
$(document).ready(function() {
    


function questionLayout () {
    //for every i (question) create a div containing it
    for (i=0; i<questions.length;i++){
    var newDivQ = $("<div class = 'questionContainer'>").text(questions[i].Q);
    var newDivA = $("<div class = 'answerA'>").text(questions[i].qAnswers.A)
    var newDivB = $("<div class = 'answerB'>").text(questions[i].qAnswers.B) 
    var newDivC = $("<div class = 'answerC'>").text(questions[i].qAnswers.C)
    var newDivD = $("<div class = 'answerD'>").text(questions[i].qAnswers.D)
        
    $(newDivQ).append(newDivA);
    $(newDivQ).append(newDivB);
    $(newDivQ).append(newDivC);
    $(newDivQ).append(newDivD);
    
    $('#questionsForm').append(newDivQ);
}

    
}

questionLayout();
});