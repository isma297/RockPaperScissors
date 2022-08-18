// Computer play--- choose r,p,s randomly
let roll=0;
let cpu='';
function computerPlay() {
    roll=Math.floor(Math.random()*100);
    if(roll<33){ cpu="rock";}
    else if(roll <66){cpu="paper";}
    else {cpu="scissors";}   
        return cpu;}
//Player Play ---- function to input with keybord and play trough console
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
const container=document.querySelector('#container');
const p= document.createElement('p');
let winner;
let scorePlayer=0;
let scoreComputer=0;
// BUTTONS to play
const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click',()=>play('rock'))
const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click',()=>play('paper'))  
const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click',()=>play('scissors'))  

function play(hand){
   // for(let i=0; i<5; i++){
       computerPlay();
        if(cpu===hand){
        p.textContent='this is a tie';
        container.appendChild(p);
        }
        else if (cpu=="rock"&&hand=="scissors" ||  cpu=="paper"&&hand=="rock"|| cpu=="scissors"&&hand=="paper"){
        //scoreComputer++;
        p.textContent='Cpu wins';
        container.appendChild(p);
        }
        else{ //scorePlayer++;
            p.textContent='you win';
            container.appendChild(p);
            }
           
           // scoreComputer == scorePlayer ? winner="tie" :(scoreComputer > scorePlayer ? winner="The computer won": winner="the player won");
        
           // return winner;
        }


//play();