
//generate random number
var randomNumber= Math.ceil(Math.random() * 5);


//ask from the user to guess the random number
var guessNumber=parseInt(prompt("Guess the random number(between 1-5)"));


//compare the random number and the guess number
 if( randomNumber==guessNumber){
 	alert("You won!!");
 } else {
 	alert("You loosed !!");
 }