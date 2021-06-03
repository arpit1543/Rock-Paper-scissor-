const userButton = document.querySelectorAll("button");
const computerButton = ["Rock","Paper","Scissor"];
const userPressed = document.getElementById('user')
const computerPressed = document.getElementById('computer')
const resultGot = document.getElementById('result')

let computer;
let user;

// selecting a random choice for the computer
function computerSelection() {
     computer = computerButton[Math.floor(Math.random()*3)]
     computerPressed.textContent = computer;
    } 
 
// selecting the User chice and storing it 
userButton.forEach(button=> 
    button.addEventListener('click',function(){
        user = (button.classList.value);
        userPressed.textContent = user;
        
        computerSelection()
        // calling the main function
        game(computer,user)

    }))


    function game (computer,user) {
        switch (computer){
          case 'Rock':
              if(user == 'Scissor')
             {
                resultGot.textContent=("Computer Won !!!")
             }
             else if(user=='Paper') {
                resultGot.textContent=("User Won !!!")
             }
             else {
                resultGot.textContent=("Draw !!!")
            }
             break;
          
          
             case 'Paper':
                if(user == 'Scissor')
                {
                    resultGot.textContent=("User Won !!!")
                }
                else if(user=='Paper') {
                    resultGot.textContent=("Draw !!!")
                }
                else {
                    resultGot.textContent=("Computer Won !!!")
                }
                break;


                case 'Scissor':
                    if(user == 'Scissor')
                    {
                        resultGot.textContent=("Draw !!!")
                    }
                    else if(user=='Paper') {
                        resultGot.textContent=("Computer Won !!!")
                    }
                    else {
                        resultGot.textContent=("User Won !!!")
                    }
                    break;

             default :
             console.log("what the heck did you press")
              break;

        }
    }

