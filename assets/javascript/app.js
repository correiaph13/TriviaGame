        
$(document).ready(function() {

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {

                alert("you have been terminated");
            }
        }, 1000);
    }
    
    window.onload = function () {
        var fiveMinutes = 60 * 5,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    };


    function questionLayout () {

        //for every i (question) create a div containing it, used tilde to be able to use the vartiable inside the newDivA 
        // string to iterate the radio names in order to separate the groups of answers for each question
        //syntax for using variable within string is ${var}
        // to each question div, i appended the text for the answers and prepended a radio button to the text

        for (i=0; i<questions.length; i++){

            var newDivQ = $("<div class = 'questionContainer'>").text(questions[i].Q);
            
            var radioName = ('answer'+[i]);

                var newDivA = $(`<input type='radio' name=radioName${i}  class = 'answerA'>`);
                newDivA.attr('value', questions[i].qAnswers.A);
                var newDivAT = $("<div class='answerContainer'>").text(questions[i].qAnswers.A);
                
                var newDivB = $(`<input type='radio' name=radioName${i}  class = 'answerB'>`);
                newDivB.attr('value', questions[i].qAnswers.B); 
                var newDivBT = $("<div class='answerContainer'>").text(questions[i].qAnswers.B);
            
                var newDivC = $(`<input type='radio' name=radioName${i}  class = 'answerC'>`); 
                newDivC.attr('value', questions[i].qAnswers.C);
                var newDivCT = $("<div class='answerContainer'>").text(questions[i].qAnswers.C);

                var newDivD = $(`<input type='radio' name=radioName${i}  class = 'answerD'>`); 
                newDivD.attr('value', questions[i].qAnswers.D);
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

            // ============================================================================================ //



}   
}
questionLayout();

$("#userAnswers").on("click", function(event){
    var userInput = $("input[type='radio']:checked");
    
    

    if (userInput.length < 10) {
        alert ("Please answer all the questions first!");
    }
    else {
        var correctAnswers = 0;
        

        for (let j = 0; j < userInput.length; j++) {
            console.log(questions[j].correctA, userInput[j].value);

            if (questions[j].correctA === userInput[j].value) {
                correctAnswers++;
            }

        }
        alert(`you got  ${correctAnswers} correct answers!`)
        console.log(correctAnswers);

    }

    }); 
    


});