//Question Bank
var questionBank= [
    {
        question : 'Pages of a website are interlinked through' ,
        option :['HTTP','marquee', 'hyperlinks', 'IP address'],
        answer : 'hyperlinks'
    },
    {
        question : 'Which of the following operating system is based on open-source software?' ,
        option :['Macintosh','Windows 2000', 'Windows NT', 'Linux'],
        answer : 'Linux '
    },
    {
        question : 'C++ is an object oriented language, and C, BASIC, and Pascal are ________ languages.' ,
        option :['procedural','scripting', 'general purpose', 'web based'],
        answer : 'procedural'
    },
    {
        question : 'The amount of time taken by a device to begin reading data is called' ,
        option :['Seek time','Read time', 'Access time', 'Write time'],
        answer : 'Access time'
    },
    {
        question : 'The main function of a web server is to store and process' ,
        option :['internet','websites', 'database', 'programs'],
        answer : 'websites'
    },
    {
        question : '“Google Language Translator” is an example of the application of' ,
        option :['internet','debugging', 'computer simulations', 'machine learning'],
        answer : 'machine learning'
    },
    {
        question : 'A computer program that translates one statement of program instructions at a time into machine language is called' ,
        option :['CPU','Interpreter', 'Compiler', 'Simulator'],
        answer : 'Interpreter'
    },
    {
        question : 'NTFS stands for?' ,
        option :['New Trend File Saving','Network File Saving', 'New Technology File System', 'None Of These'],
        answer : 'New Technology File System'
    },
    {
        question : 'Which variable type can have only two possible values?' ,
        option :['integer','string', 'double', 'bool'],
        answer : 'bool'
    },
    {
        question : 'In computer science and information technology (IT), DNS is an abbreviation of' ,
        option :['Direct Name System','Domain Name System', 'Direct Name Software', 'Domain Name Software'],
        answer : 'Domain Name Software'
    },
]
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();