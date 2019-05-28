        
$(document).ready(function() {
    
function questionLayout () {

    //for every i (question) create a div containing it

    for (i=0; i<questions.length; i++){

    var newDivQ = $("<div class = 'questionContainer'>").text(questions[i].Q);


        var newDivA = $("<input type='radio' class = 'answerA'>");
        var newDivAT = $("<div class='answerContainer'>").text(questions[i].qAnswers.A);
        
        var newDivB = $("<input type='radio' class = 'answerB'>"); 
        var newDivBT = $("<div class='answerContainer'>").text(questions[i].qAnswers.B);
    
        var newDivC = $("<input type='radio' class = 'answerC'>"); 
        var newDivCT = $("<div class='answerContainer'>").text(questions[i].qAnswers.C);

        var newDivD = $("<input type='radio' class = 'answerD'>"); 
        var newDivDT = $("<div class='answerContainer'>").text(questions[i].qAnswers.D);
    
    $(newDivQ).append(newDivAT);
    $(newDivAT).prepend(newDivA);
   

    $(newDivQ).append(newDivBT);
    $(newDivBT).prepend(newDivB);

    
    $(newDivQ).append(newDivCT);
    $(newDivCT).prepend(newDivC);

    
    $(newDivQ).append(newDivDT);
    $(newDivDT).prepend(newDivD);

 
    
    $('#questionsForm').append(newDivQ);

    // var correctAnswers = [questions[i].correctA];

}   
}
questionLayout();
// var userAnswers = [];

// $("button").on("click", function(event){
//     var userInput = $(this).attr("class");
//     userAnswers.push(userInput);
//     console.log(userAnswers);

//     }); 

});