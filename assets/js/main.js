const startButton=document.getElementById('startBtn')
const questionContainerElement=document.getElementById('questContainer')

startButton.addEventListener('click',startGame)

function startGame(){
    console.log('Activated')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}

function updateLocalStorage(){ 
    var scoreSrt=JSON.stringify(string);


}

