#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "sentence",
        message: "ENTER YOUR SENTENCE!",
        type: "input"
    }
]);
let word = answer.sentence.trim().split(" ");
console.log(word);
console.log(`COUNT YOUR SENTENCE WORD: ${word.length}`);
