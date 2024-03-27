#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    { name: "userGuessedNumber",
        type: "number",
        message: "Enter a number between 1 and 5" }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You Guessed Right Number.");
}
else {
    console.log("Better Luck For Next Time!");
}
