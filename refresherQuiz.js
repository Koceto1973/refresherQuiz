// IIFE
(function() {
    // questions database
    var questions = [];
    var Question = function(number,text,answers,rightAnswer){
        this.number = number;
        this.text = text;
        this.answers = answers;
        this.rightAnswer = rightAnswer;
    }

    // pushing more questions
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

    // pick random number
    var x = PickRandomQuestionNumber(questions)

    // format prompt
    var boxMessage = "                  Question: \n";
    boxMessage += " "+questions[x].text+"\n";
    for (i=0; i<questions[x].answers.length; i++) {
        boxMessage += "     "+(i+1)+"."+questions[x].answers[i]+" \n";
    }
    
    // process answer
    var answer = prompt(boxMessage);
    console.log(answer+( questions[x].rightAnswer == answer ? " -correct answer" : " -wrong answer"));
})() 