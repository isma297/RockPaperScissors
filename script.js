// Computer play
let cpuHand;
function computerPlay() {
    cpuHand=Math.floor(Math.random()*100);
    //console.log(cpuHand);
    if(cpuHand<33){
        cpuHand="rock";
                  //  console.log(cpuHand);
        }
    else if(cpuHand <66){cpuHand="paper";
                //    console.log(cpuHand);
        }
    else {cpuHand="scissors";
            //console.log(cpuHand);
          }   
            return cpuHand;     
            }
            
//Player Play
let playerHand;
function playerPlay(){
    playerHand=(prompt("Input your move",""))
    //console.log(playerHand);
    playerHand=playerHand.toLowerCase();
    //console.log(playerHand);
    if (playerHand!=="rock"&&playerHand!=="paper" && playerHand!=="scissors"){
    onsole.log("Only availables moves are: rock, paper o scissor");
    alert("Only availables moves are: rock, paper o scissor");
    playerPlay();
    }
    return playerHand;   
    }

        //Play the Game!
let winner;
let scorePlayer=0;
let scoreComputer=0;
function play(){
    for(let i=0; i<5; i++){
        computerPlay();
        playerPlay();
        console.log(cpuHand);
        console.log(playerHand);

        if(cpuHand===playerHand){
        console.log("You chose "+ playerHand+ " and the computer chose "+
        cpuHand +" It is a Tie!" );
        }
        else if (cpuHand=="rock"&&playerHand=="scissors"||
        cpuHand=="paper"&&playerHand=="rock"||
        cpuHand=="scissors"&&playerHand=="paper"){
        scoreComputer++;
        console.log("You chose "+ playerHand+ " and the computer chose "
        + cpuHand +" The computer obtained 1 point!");
        }
                else{ scorePlayer++;
                    console.log("You chose "+ playerHand+ " and the computer chose "+
                     cpuHand +" You obtained 1 point!")};
            
            }
            console.log("Player score: "+scorePlayer+" ----- Computer score: "
            +scoreComputer);
            scoreComputer == scorePlayer ? winner="tie" :(scoreComputer > scorePlayer ? winner="The computer won": winner="the player won");
            console.log(winner.toUpperCase());
            return winner;
        }

        

//play();