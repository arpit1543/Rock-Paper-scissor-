const resultDisplay = document.querySelector('#result')
const choicesDisplay =  document.querySelector('#choices')
const choices = ['rock','paper','scissors']

 

const handleClick = (e) => 
{
getResults(e.target.innerHTML,choices[Math.floor(Math.random()* choices.length)])
}

choices.forEach(choice => {
    const button = document.createElement('button')
    button.id = choice
button.innerHTML = choice
button.addEventListener('click',handleClick)
choicesDisplay.appendChild(button)
})


const getResults = (userChoice,computerChoice) => {
switch(userChoice + computerChoice)
{
case 'scissorspaper':
case'rockscissors' :
case 'paperrock' :
    resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' YOU WIN '
break;
/// THE LOGIC IS SAME AS THE INTERMEDIATE LEVEL 
//Do check that out 
}
}