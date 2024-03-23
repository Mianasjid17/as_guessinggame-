#!/usr/bin/env node
import inquirer from "inquirer";
//1)  computer will generate a random number,
//2)   user input for guessing games
//3)    compare user input  with computer generated numbers and show the results
const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
{
    name:"userGuessedNumber",
    type:"numbers",
    message:"please Enter your guess number between 1 - 10:",
},
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("congtratulations!you guessed right number.")
}else{      
console.log("you guessed wrong number")
}


