// Quiz Questions Array
let questions=[
{
    question:'what does HTML stand for?',
    questionno:'1',
    a:'Hypertext Markup Language',
    b:'Hypertext and links Markup Language',
    c:'Hypertext Machine Language',
    d:'Hightext Machine Language',
    ans:"ans1"

},

{
    question:'How many Heading tags are there in HTML?',
    questionno:'2',
    a:'2',
    b:'3',
    c:'6',
    d:'5',
    ans:'ans3'

},
{
    question:'What does CSS Stand For?',
    questionno:'3',
    a:'Computer Style Sheets',
    b:'Cascading Style Sheets',
    c:'Creative Style Sheets',
    d:'Colorful Style Sheets',
    ans:'ans2'

},
{
    question:'Which HTML attribute is Used for inline Styles?',
    questionno:'4',
    a:'styles',
    b:'class',
    c:'font',
    d:'style',
    ans:'ans4'

},
{
    question:'How do you Insert a comment in a CSS file?',
    questionno:'5',
    a:'/* This is a Comment*/',
    b:'//This is a Comment',
    c:'//*This is a Comment*//',
    d:'*/This is a Comment*/',
    ans:'ans1'
},
]

const question = document.querySelector('.question1');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('.Submit-btn');
const answers = document.querySelectorAll('.answer');
const ques_count = document.querySelector('.score-area');

let questioncount=0;
let score = 0;
const loadquestion = function loadquestion(){
    const questionlist = questions[questioncount];
    question.innerHTML = questionlist.question
    
    option1.innerHTML = questionlist.a
    option2.innerHTML = questionlist.b
    option3.innerHTML = questionlist.c
    option4.innerHTML = questionlist.d

    ques_count.innerHTML = questionlist.questionno;
}

loadquestion();

const getcheckanswer = ()=>{
    let answer;
    answers.forEach(function(currentAns){
        if(currentAns.checked){
            answer = currentAns.id;
        }
    })

    return answer;
}

submit.addEventListener('click',()=>{
    const answert = getcheckanswer();
    console.log(answert)

if (answert === questions[questioncount].ans){
    score++
};
questioncount++

if(questioncount < questions.length){
    loadquestion()
}

else{
    score2.innerHTML = `<span class = "result">You Scored <span>${score}
    </span>/${questions.length}</span>
    <button class="play-again" onclick= 'location.reload()'>PLAY AGAIN</button>`
    document.querySelector('score-area').getElementsByClassName.display = "block";
    document.querySelector('.container').getElementsByClassName.display= 'none';
}


});




















