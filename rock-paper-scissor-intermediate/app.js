const userDisplay = document.createElement('h1');
const computerDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');

const gameGrid = document.getElementById('game')

gameGrid.append(userDisplay,computerDisplay,resultDisplay);


const choices = ['Rock', 'Paper', 'Scissors' ]
let userChoice;
let computerChoice;

// we are using function experssion here
const handClick = (e) =>
{
userChoice = e.target.id;
userDisplay.innerHTML = 'User Choice: ' + userChoice
generateComputerChoice()
getResult()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice;
    computerDisplay.innerHTML = 'Computer Choice: ' + computerChoice
}


 for (let i = 0; i<choices.length;i++)
 {
     const button = document.createElement('button')
     button.id = choices[i]; //  you can delete this id if you want to use e.target.html in the handClick fun
     button.innerHTML=choices[i]
     button.addEventListener('click',handClick)
     gameGrid.appendChild(button)
    }

    const getResult = () => {
        switch(userChoice + computerChoice) 
        {
              case 'PaperRock' :
              case 'ScissorsPaper' :
              case 'RockScissors' :
                    resultDisplay.innerHTML = 'User Won'
                    break;
                    case 'RockPaper' :
                        case 'PaperScissors' :
                        case 'Scissorsock' :
                              resultDisplay.innerHTML = 'Computer Won'
                              break;
            case ('PaperPaper') :
              case 'ScissorsScissors' :
              case 'RockRock' :
                    resultDisplay.innerHTML = 'Its a Draw'
                    break;
                    
   }               
    }