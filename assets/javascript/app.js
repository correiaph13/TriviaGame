        
$(document).ready(function() {

var correctAnswers = 0;


function questionLayout () {

    //for every i (question) create a div containing it

    for (i=0; i<questions.length; i++){


    var newDivQ = $("<div class = 'questionContainer'>").text(questions[i].Q);
    
    var radioName = ('answer'+[i]);

        var newDivA = $(`<input type='radio' name=radioName${i}  class = 'answerA'>`);
        newDivA.attr('value', questions[i].qAnswers.A);
        var newDivAT = $("<div class='answerContainer'>").text(questions[i].qAnswers.A);
        
        var newDivB = $(`<input type='radio' name=radioName${i}  class = 'answerB'>`);
        newDivB.attr('value', questions[i].qAnswers.A); 
        var newDivBT = $("<div class='answerContainer'>").text(questions[i].qAnswers.B);
    
        var newDivC = $(`<input type='radio' name=radioName${i}  class = 'answerC'>`); 
        newDivC.attr('value', questions[i].qAnswers.A);
        var newDivCT = $("<div class='answerContainer'>").text(questions[i].qAnswers.C);

        var newDivD = $(`<input type='radio' name=radioName${i}  class = 'answerD'>`); 
        newDivD.attr('value', questions[i].qAnswers.A);
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

}   
}
questionLayout();

$("#userAnswers").on("click", function(event){
    var userInput = $("input[type='radio']:checked")
    

    if (userInput.length < 10) {
        alert ("Please answer all the questions first!")
    }
    else {
        for (let i = 0; i < userInput.length; i++) {
            if (questions[i].correctA === userInput[i].value) {
                correctAnswers++;
            }
          console.log(userInput[i].value) ;  
          
        }
        
        
    }

console.log(correctAnswers);
    }); 


});