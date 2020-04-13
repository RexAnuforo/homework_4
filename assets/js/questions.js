// define our questions

//have an idea of our HTML layout 

//<h2> countdown timer 

//<ul><li> questions

//create a button with event llistener to start the quiz.

//load in timer and question 

//if and else for questions correction

//indicate weather or not questions was correct

//if incorrect subtract time (10seconds)

//if correct. increment score ++

//loud up question 2 (repeat until question 5)

// loud up game over indication & score 

//local store to save info




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
  