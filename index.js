var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice1 = "images/dice" + randomNumber1 + ".png";
var dice2 = "images/dice" + randomNumber2 + ".png";
document.getElementsByTagName("img")[0].setAttribute("src",dice1);
document.getElementsByTagName("img")[1].setAttribute("src",dice2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Won!"
}
else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML="Draw!"
}
else{
    document.querySelector("h1").innerHTML="Player2 Won!"
}