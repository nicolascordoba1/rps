const para = document.createElement('p');
const div = document.querySelector('.contenedor');
const contador = document.querySelector('.contador');
const paraStatus = document.createElement('p');
const contadorText = document.createElement('p');
const playAgain = document.createElement('button');
playAgain.innerText = 'Play Again';

let counterPlayer = 0
let counterPC = 0
let computerSelection = computerPlay();
function computerPlay(){
    const options = ['rock', 'paper', 'scissors']
    const number = Math.floor(Math.random()*3);
    return options[number]
};

contador.appendChild(paraStatus);
let btn = document.querySelectorAll('.choice');


let playerSelection = '';

btn.forEach(choice => choice.addEventListener('click', ()=> {
    game();
    playerSelection = choice.innerText
    computerSelection = computerPlay()

    paraStatus.innerText = `You chose ${playerSelection} and the PC chose ${computerSelection}`;
  
}));

function playRound(playerSelection, computerSelection) {
         
    if(playerSelection === 'rock' && computerSelection==='scissors'){
        counterPlayer += 1;
    } else if(playerSelection === 'paper' && computerSelection==='rock'){

        counterPlayer += 1;

    } else if(playerSelection === 'scissors' && computerSelection==='paper'){

        counterPlayer += 1;

    }  else if(playerSelection === computerSelection ){
        counterPlayer += 0;
        counterPC += 1;

    } else{

        counterPC += 1;
        
    }
    contadorText.innerText = `Actual score: ${counterPlayer} for you and ${counterPC} for the PC`;
    contador.appendChild(contadorText)
};

function game(){
    if(counterPC<=4 && counterPlayer<=4){
        playRound(playerSelection, computerSelection)
    } 
    if(counterPC == 5){
        para.innerText = 'You lose!, pc wins.';
        div.appendChild(para);
        div.appendChild(playAgain)
        playAgain.addEventListener('click', ()=>{
            document.location.reload(true)
        })
        choice.removeEventListener('click', );

    } else if(counterPlayer == 5){
        
        para.innerText = 'Congratulations!, You are the winner';
        div.appendChild(para);
        div.appendChild(playAgain)
        playAgain.addEventListener('click', ()=>{
            document.location.reload(true)
        })
        choice.removeEventListener('click', );
    } 
};