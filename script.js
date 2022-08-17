// Computer play
let cpu;
function computerPlay() {
    cpu=Math.floor(Math.random()*100);
    if(cpu<33){
        cpu="rock";
         }
    else if(cpu <66){cpu="paper";
        }
    else {cpu="scissors";
          }   
            return cpu;     
            }
//Player Play
let player;
function playerPlay(){
    player=(prompt("Input your move",""))
    player=player.toLowerCase();
    if (player!=="rock"&&player!=="paper" && player!=="scissors"){
    //console.log("Only availables moves are: rock, paper o scissor");
    alert("Only availables moves are: rock, paper o scissor");
    playerPlay();
    }
    return player;   
    }
//Play the Game!
let winner;
let scorePlayer=0;
let scoreComputer=0;
function play(){
   // for(let i=0; i<5; i++){
        computerPlay();
        playerPlay();
        // console.log(cpu);
        // console.log(player);

        if(cpu===player){
        // console.log("You chose "+ player+ " and the computer chose "+ cpu +" It is a Tie!" );
        }
        else if (cpu=="rock"&&player=="scissors" ||  cpu=="paper"&&player=="rock"|| cpu=="scissors"&&player=="paper"){
        scoreComputer++;
        // console.log("You chose "+ player+ " and the computer chose " + cpu +" The computer obtained 1 point!");
        }
        else{ scorePlayer++;
            //  console.log("You chose "+ player+ " and the computer chose "+ cpu +" You obtained 1 point!")};
            }
            // console.log("Player score: "+scorePlayer+" ----- Computer score: " +scoreComputer);
            scoreComputer == scorePlayer ? winner="tie" :(scoreComputer > scorePlayer ? winner="The computer won": winner="the player won");
            // console.log(winner.toUpperCase());
            return winner;
        }

        

//play();