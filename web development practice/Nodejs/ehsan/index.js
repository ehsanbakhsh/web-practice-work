const printSomeThing = (name) => {
    return console.log(`${name} is printed here`)
}
const printSomeThing2 = (name) => {
    return console.log(`${name} is printed2 here`)
}
// module.exports = printSomeThing
// default export

// naming export
// module.exports = { printSomeThing, printSomeThing2 }
module.exports = {
    printSomeThings: printSomeThing,
    printSomeThings2: printSomeThing2
}

// exports.printSomeThings = printSomeThing  // exports with this name printSomeThings
// exports.printSomeThings2 = printSomeThing2  // exports with this name printSomeThings2

