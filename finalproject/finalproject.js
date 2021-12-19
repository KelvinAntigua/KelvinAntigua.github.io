let randomNumber= Math.trunc(Math.random()*100 + 1);
let button=document.querySelector('.btn');
let userInput=document.querySelector('.userInput');
let userScore=document.querySelector('.realScore');
let userHistory=document.querySelector('.inputRecord');
let defaultImage=document.querySelector('.guessingImage');
let youwin=document.querySelector('.youwin');
let tooHigh=document.querySelector('.toohigh');
let tooLow=document.querySelector('.toolow')
let reveal=document.querySelector('.finally')
let reset=document.querySelector('.reset')
let highscore=10;
userScore.textContent=`${highscore}`

let userArray=[]
button.addEventListener('click',function () {
   userArray.push(userInput.value)
   userHistory.textContent=`${userArray}`
   if (userInput.value > randomNumber) {
       tooHigh.style.display='block';
       tooLow.style.display='none';
       youwin.style.display='none';
       highscore-=1
       userScore.textContent=`${highscore}`

       
   } 
   if (userInput.value < randomNumber) {
       tooLow.style.display='block';
       tooHigh.style.display='none';
       youwin.style.display='none';
       highscore-=1
       userScore.textContent=`${highscore}`
      


   }
if (userInput.value == randomNumber) {
    youwin.style.display='block';
    tooHigh.style.display='none';
    tooLow.style.display='none';
    //userScore.textContent=`${highscore}`
    document.querySelector('.guessContents').style.backgroundColor='gold';
    reveal.style.color='#7689';
    reveal.textContent=`the secret number is ${randomNumber}`
    



    
}
   if (highscore==0) {
       alert("you lost the game")
   }
   if (userInput.value== '' ) {
       alert("please enter a number")
   }
   
})
reset.addEventListener('click', function () {
    randomNumber= Math.trunc(Math.random()*100 + 1);
    console.log(randomNumber);
    highscore=10;
    userScore.textContent=`${highscore}`;
    tooLow.style.display='none';
    youwin.style.display='none';
    tooHigh.style.display='none';
    userArray.length=0
    userHistory.textContent=`${userArray}`
    reveal.style.color='#a9dce';
    document.querySelector('.guessContents').style.backgroundColor='antiquewhite';

})
console.log(randomNumber);