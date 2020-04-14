var questions = [
    {
      question: 'What does html stand for?',
      answers: [
        { text: '  Hypertext Markup Language', correct: true },
        { text: ' HyperTitle Markup language', correct: false },
        {text:' Hightext Markup Language',correct:false},
        {text:' Hightext Markup Language',correct:false},

      ]
    },
    {
      question: 'Who is the best Teacher?',
      answers: [
        { text: 'Dan', correct: true },
        { text: 'Gary', correct: true },
        { text: 'Eric', correct: true },
        { text: 'Dan w/o a beard', correct: false }
      ]
    },
    {
      question: 'whats css used for',
      answers: [
        { text: 'Fuctions', correct: false },
        { text: 'Styling', correct: true },
        { text: 'creating var', correct: false },
        { text: 'moving obj', correct: false }
      ]
    },
    {
      question: 'what is the first number in a array?',
      answers: [
        { text: 'null', correct: false },
        { text: '-1', correct: false },
        { text: '1', correct: false },
        { text: '0', correct: true }
        
      ]
    }
  ];


const startButton=document.getElementById('startBtn')
const questionContainerElement=document.getElementById('questContainer')
var strTimer =document.getElementById('timer')
var quest= document.getElementById('question')
var ans= document.getElementById("ansBtn")



startButton.addEventListener('click',startGame)

function timer(){
    console.log('timer')
       //update text value of timer using setinterval 
}

function startGame(){
    console.log('Activated')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    timer();
    question();
}





function question(){
    console.log('question')
    console.log(questions[0]);
    console.log(questions[0].question)
    //


}