// const fs = require("fs");
// let text = fs.readFileSync("dele.txt" , "utf-8");
// text = text.replace("Buddy" , "sajeel Anwar Pannu")
// console.log("The content of the file is");
// console.log(text);


// console.log("Creating a new file...");
// fs.writeFileSync("SajeelAnwar Pannu" , text);
const { printSomeThings: printSomeThing, printSomeThings2: printSomeThing2 } = require("./ehsan")
printSomeThing("some")
printSomeThing2("ss")

// ./ehsan  is a file
// ./ehsan is a folder and index.js file is inside this folder
// if both upper are false, than it goes to the node_modules folder and find the required module in current nodejs repo.

// if third one is also false, than it find the module from built in modules section where node is installed

const _ = require("underscore")
const min = _.min([56, 233, 3555, 444])
console.log(min)