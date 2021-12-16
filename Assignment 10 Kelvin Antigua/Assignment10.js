let button1=document.querySelector('.button1')
let result1= document.querySelector('.result1')
let button2=document.querySelector('.button2')
let result2= document.querySelector('.result2')


//let randomNumber=Math.trunc(Math.random()*6);
let player1=[]
let player2=[]
//result1.textContent="hello"
//result2.textContent="hello"

button1.addEventListener('click',function () {
    let randomNumber=Math.trunc(Math.random()*6);
    player1.push(randomNumber)
    console.log(player1)
    let sum = 0;

for (let i = 0; i < player1.length; i++) {
    sum += player1[i];
}
console.log(sum);

if (sum>=16) {
    result1.textContent="you win"
} else {
    
}

document.querySelector('.answer1').textContent=` this is your score:${sum}`
    
})

button2.addEventListener('click',function () {
    let randomNumber=Math.trunc(Math.random()*6);
    player2.push(randomNumber)
    console.log(player2)
    let sum = 0;

for (let i = 0; i < player2.length; i++) {
    sum += player2[i];
}
console.log(sum);

if (sum>=16) {
    result2.textContent="you win"
} else {
    
}


document.querySelector('.answer2').textContent=` this is your score:${sum}`
    
})
