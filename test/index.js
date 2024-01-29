console.log("hello world!");

function getComputerChoice(){
    let a=Math.floor(Math.random()*3);
    let computerChoice;
    if(a==0){
        computerChoice='Rock';
    }
    else if(a==1){
        computerChoice='Scissors';
    }
    else{
        computerChoice='Paper';
    }
    return computerChoice;
}

function playRound(playerSelection, computerChoice,a) {
    if(playerSelection=='paper'){
        if(computerChoice=='Paper'){
            console.log("平局");
            alert("平局");
            
        }
        else if(computerChoice=='Rock'){
            console.log("you win!");
            alert("you win!");
            a[0]++;
        }
        else{
           console.log("you lose!");
           alert("you lose!");
           a[1]++;
        }
    }
    if(playerSelection=='rock'){
        if(computerChoice=='Rock'){
            console.log("平局");
            alert("平局");
            
        }
        else if(computerChoice=='Scissors'){
            console.log("you win!");
            alert("you win!");
            a[0]++;
        }
        else{
           console.log("you lose!");
           alert("you lose!");
           a[1]++;
        }
    }
    if(playerSelection=='scissors'){
        if(computerChoice=='scissors'){
            console.log("平局");
            alert("平局");
            
        }
        else if(computerChoice=='Paper'){
            console.log("you win!");
            alert("you win!");
            a[0]++;
        }
        else{
           console.log("you lose!");
           alert("you lose!");
           a[1]++;
        }
    }
}

var a=[0,0];

while(true){
let userChoice=prompt("请输入Rock/Scissors/Paper").toLowerCase();
let computerChoice=getComputerChoice();
//console.log(a);
playRound(userChoice,computerChoice,a);
alert("you:computer="+ a[0] + ":" + a[1]);
}
//alert(computerChoice);