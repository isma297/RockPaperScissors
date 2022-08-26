// Computer play--- choose r,p,s randomly
let roll=0;
let cpu='';
function computerPlay() {
    roll=Math.floor(Math.random()*100);
    if(roll<33){ cpu="rock";}
    else if(roll <66){cpu="paper";}
    else {cpu="scissors";}   
        return cpu;}
//Player Play ---- function: input with keybord and play trough console
// REPLACED WITH BUTTONS.
// let player;
// function playerPlay(){
//     player=(prompt("Input your move",""))
//     player=player.toLowerCase();
//     if (player!=="rock"&&player!=="paper" && player!=="scissors"){
//     //console.log("Only availables moves are: rock, paper o scissor");
//     alert("Only availables moves are: rock, paper o scissor");
//     playerPlay();
//     }
//     return player;   
//     }
//Play the Game!
const container2=document.querySelector('#container2');
const handPlayed= document.createElement('p');
const roundResult=document.createElement('p');
const result=document.createElement('p');
const divWin=document.createElement('p');
divWin.setAttribute('class','winner');
let round=0;
let playerScore=0;
let cpuScore=0;
// BUTTONS to play
// const btnRock = document.querySelector('#rock');
// const btnPaper = document.querySelector('#paper');
// const btnScissors = document.querySelector('#scissors');
// btnRock.addEventListener('click',()=>play('rock'));
// btnPaper.addEventListener('click',()=>play('paper'));  
// btnScissors.addEventListener('click',()=>play('scissors'));

const buttons=document.querySelectorAll('button');
buttons.forEach((button)=>{button.addEventListener('click',()=>{play(button.id)})
});

function play(hand){
  if(round<5){
  round++; 
  computerPlay();
  if(cpu===hand){
    handPlayed.textContent='Player:   -'+hand.toUpperCase()+'-    vs    -'+cpu.toUpperCase()+'-   :Cpu';
    result.textContent='Round '+round+': Tie, no points :('
    }
  else if (cpu=="rock"&&hand=="scissors" ||  cpu=="paper"&&hand=="rock"|| cpu=="scissors"&&hand=="paper"){
    cpuScore++;
    handPlayed.textContent='Player:   -'+ hand.toUpperCase() +'-    vs    -'+ cpu.toUpperCase()+'-   :Cpu';
    result.textContent='Round '+round+': +1 to Cpu'
    }
  else{playerScore++;
        handPlayed.textContent='Player:   -'+ hand.toUpperCase() +'-    vs    -'+ cpu.toUpperCase()+'-   :Cpu';
        result.textContent='Round '+round+': +1 to Player'
        }
  roundResult.textContent='Player '+playerScore+'   :  '+ cpuScore+ ' Cpu';
  container2.appendChild(handPlayed);
  container2.appendChild(result);
  container2.appendChild(roundResult);
  }
if(round==5) {playerScore==cpuScore? winner='It is a TIE':(playerScore>cpuScore?winner='YOU WIN!':winner='CPU WINS!')
divWin.textContent=winner;
container2.appendChild(divWin)
}
//    

}


//play();