var num =parseInt(prompt("Please enter table Number."));


for (var i = 1 ; i <= 10 ; i++){
    console.log(num + " x "+ i +" = "+ (num * i));
}



console.log("Before");
for (var v = 0 ; v < 10 ; v++){
    if (v ==5){
        continue;
    }
    console.log ("V = "+v)
}
console.log("After");


console.log("Before");
for (var v = 0 ; v < 10 ; v++){
    if (v ==5){
        break;
    }
    console.log ("V = "+v)
}
console.log("After");