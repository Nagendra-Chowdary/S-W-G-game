
  


//SNAKE WATER AND GUN GAME
let userInput=prompt("Choose your power (in uppercase): S(snake),W(water),G(Gun)");
let options=['S','G','W'];
let ob={'S':"SNAKE",'W':"WATER",'G':"GUN"};
let randOptionNum=Math.floor((Math.random()*3));
let randOption=options[randOptionNum];
console.log(randOption);
alert(`You chose ${ob[userInput]}`);
document.querySelector(".headline").innerHTML=`${ob[userInput]}  &nbsp;&nbsp;&nbsp; vs &nbsp;&nbsp;&nbsp;   ${ob[randOption]}`;

if(userInput==randOption){
    document.querySelector(".result").innerHTML="<p>It's a tie</p>";
}
else if(options[(randOptionNum+1)%3]==userInput){
    document.querySelector(".result").innerHTML="<p>You win</p>";
    
}
else{
    document.querySelector(".result").innerHTML="<p>You lose</p>";

}

    