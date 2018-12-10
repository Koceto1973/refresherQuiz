// IIFE
(function() {
    // questions database
    var questions = [];

    var Question = function(number,text,answers,rightAnswer){
        this.number = number;
        this.text = text;
        this.answers = answers;
        this.rightAnswer = rightAnswer;
        this.show = function() {            
            // format prompt
            var boxMessage = "                  Quiz question: \n";
            boxMessage += " "+this.text+"\n";
            for (i=0; i<this.answers.length; i++) {
                boxMessage += "     "+(i+1)+"."+this.answers[i]+" \n";
            }
            boxMessage += "\n Note: Enter 0 to exit the quiz ...";

            // display prompt and get answer
            var answer = prompt(boxMessage);
            
            if ( answer == 0 ) { 
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
    }

    // pushing couple questions
    var q1 = new Question(1,"What is the most popular web programming language?",["JavaScript","C#","Java"],1);
    questions.push(q1);
    var q2 = new Question(2,"Is number a value type in JavaScript?",["Yes","No"],1);
    questions.push(q2);
    var q3 = new Question(3,"What is the server side alternative of JavaScript?",["Go","C++","Node","Java"],3);
    questions.push(q3);

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
        questions[x].show();        
    }    
})() 