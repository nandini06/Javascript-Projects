//Game functions
// Player must guess a number between min and max
//Player gets a certain amount of guesses
//Notify number of guesses remaining
//Notify the player of the correct answer if loose
//Let player choose to play again

//Game values

let min=1,
   max=10,
   winningNum=getRandomNum(min,max),
   guessesLeft=3;

//UI Element
const UIgame = document.querySelector('#game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message');

//Assign min and mas

UIminNum.textContent = min;
UImaxNum.textContent = max;

//Play again event lister

UIgame.addEventListener('mousedown',function(e){
   if(e.target.className === 'play-again')
   {
      window.location.reload();
   }
});

//Listen for guess

UIguessBtn.addEventListener('click',function(){
   let guess = parseInt(UIguessInput.value);
   // console.log(guess);

   if(isNaN(guess) || guess < min || guess > max)
   {
      setMessage(`Please enter a number between ${min} and ${max}`,'red');
   }
   else if(guess === winningNum)
   {
      //Game Over Won
      gameOver(true,`${guess} is the correct guess`);
   }
   else
   {
      //Wrong number
      guessesLeft -= 1;

      if(guessesLeft === 0)
      {
         //Game Over Lost
         gameOver(false, `Game Over, you Lost the correct number is ${winningNum}`);
      }
      else
      {
         //Game continues ans wrong
         //Change border red
         UIguessInput.style.borderColor = 'red';
         setMessage(`${guess} is not correct, you have ${guessesLeft} guesses left.`, 'red');
         //Clear Input
         UIguessInput.value='';
      }
   }
});

//Game Over
function gameOver(won,msg){

   let color;
   won === true ? color='green' : color='red';
   //Disable input
   UIguessInput.disabled = true;
   //Change border green
   UIguessInput.style.borderColor = color;
   setMessage(msg,color);

   //Play Again
   UIguessBtn.value='Play Again';
   UIguessBtn.className += 'play-again';
}
 //Set message
function setMessage(msg,color){
   UImessage.style.color = color
   UImessage.textContent=msg;
}

//Get winning num

function getRandomNum(min,max){
   return Math.floor(Math.random()*(max-min+1)+min);
}