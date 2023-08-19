
let randomNumber = 23;



const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prev_guess = []
let guessed_num = 1
const playgame = true
let hint = false


if(playgame){
  submit.addEventListener('click',function(click){
    click.preventDefault()
     const guess = parseInt(userInput.value)
     valid(guess)
   
   })
}
function valid(Guess){
  if(isNaN(Guess)){
    alert("enter valid value")
  }
  else if(Guess < 1){
    alert("enter value greater than one")
  }
  else {
    prev_guess.push(Guess)
    

    if(guessed_num===11){
      display_message('game over ')
      endgame();
      show(Guess)
    }
    else{
      check(Guess)
      show(Guess)
    }
  }
}
function check(gUess){
  if(gUess===randomNumber){
    display_message("you won ")
    endgame();
  

  }
  else if ( guessed_num === 4){
    alert('hint its 23')
   
  }
  
}
function show(g_uess){
  userInput.value = ""
  guessSlot.innerHTML += g_uess+","
  guessed_num++
  remaining.innerHTML = `you have ${11-guessed_num} guesses remaining`

}

function display_message(message){
lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
  userInput.value = "";
userInput.setAttribute('disabled',"")
playgame = false


  
}
