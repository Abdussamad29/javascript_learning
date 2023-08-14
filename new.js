
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

let playgame = true
if(playgame){
  submit.addEventListener('click',function(a){
    a.preventDefault();
    const guess = parseInt(userInput.value);
    valid(guess);
  })
}
function valid(Guess){
  if(isNaN(Guess)){
    alert("enter a valid value")
  }
  else if(Guess < 1){
    alert("enter number greater than 1")
  }
  else if(prev_guess.includes(Guess)){
    show_message("you've entered the repeated values")
  }
  else{
    prev_guess.push(Guess)
    if(guessed_num===10){
      show(Guess)
      show_message('game over ')
      endgame();

    }
    else{
      show(Guess);
      check(Guess);
    }
  }

}

function check(GUESS){
  if(GUESS===randomNumber){
    show_message("you won")
    endgame()
  }
  else{
    show_message("keep trying")
  }
  
}
function show(guessed){
  userInput.value=""
  guessSlot.innerHTML += `${guessed},`
  guessed_num++
  remaining.innerHTML = `you have ${11-guessed_num} guesses remaining`

}
function show_message(g_ussed){
  lowOrHi.innerHTML = `<h2>${g_ussed}</h2>`

}
function endgame(){
  userInput.value = "";
  userInput.setAttribute('disabled','');
  playgame = false;



}