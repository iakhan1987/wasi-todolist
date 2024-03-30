#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "Input",
            name: "TODO",
            message: "what do you want to add in your todo? ",
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do You Want to add more todo?",
            default: false,
        }
    ]);
    const { TODO, addmore } = answers;
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly add valid input.");
    }
}
if (todos.length > 0) {
    console.log("Your TODO List.");
    todos.forEach((todo) => {
        console.log(todo);
    });
}
else {
    console.log("NO TODOS Found");
}
