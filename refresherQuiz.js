// IIFE
(function() {
    
    var Question = function(number,text,answers,rightAnswer){
        this.number = number;
        this.text = text;
        this.answers = answers;
        this.rightAnswer = rightAnswer;
    }

    Question.prototype.promptQuestion = function() {
        // format prompt
        var boxMessage = "                  Quiz question: \n";
        boxMessage += " "+this.text+"\n";
        for (i=0; i<this.answers.length; i++) {
            boxMessage += "     "+(i+1)+"."+this.answers[i]+" \n";
        }
        boxMessage += "\n Note: type exit to quit the quiz ...";

        // display prompt and get answer
        var answer = prompt(boxMessage);
        
        if ( answer === 'exit' ) { 
            inQuizMood = false; 
        } else {
            if ( this.rightAnswer == answer ) {
                truthies += 1;
                console.log("Right! You scored: "+ truthies + " of total " + (truthies+falsies) + " questions." ); 
            } else {
                falsies += 1;
                console.log("Wrong! You scored: "+ truthies + " of total " + (truthies+falsies) + " questions." ); 
            }                
        } 
    }

    // pushing couple questions
    var q1 = new Question(1,"What is the most popular web programming language?",["JavaScript","C#","Java"],1);
    var q2 = new Question(2,"Is number a value type in JavaScript?",["Yes","No"],1);
    var q3 = new Question(3,"What is the server side alternative of JavaScript?",["Go","C++","Node","Java"],3);
    
    // questions database
    var questions = [q1,q2,q3];

    // random question number generator
    function PickRandomQuestionNumber(questionsBase) {
        return Math.floor(Math.random()*questionsBase.length);
    }

    // quiz loop
    var inQuizMood = true;
    var truthies = 0;
    var falsies = 0;
    while (inQuizMood) {
        // pick random number
        var x = PickRandomQuestionNumber(questions)
        questions[x].promptQuestion();        
    }    
})() 