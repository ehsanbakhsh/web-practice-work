var score = prompt("What is your score between 0 to 100?");
score = parseInt(score);

if(score > 100){
    console.log("TU APNI AUKAAT MAIN REH")
}
else if (score > 95){
    console.log("Your Grade is A+")
}
else if(score > 90){
    console.log("Your Grade is A")
}
else if(score > 80){
    console.log("Your Grade is B")
}
else if(score > 70){
    console.log("Your Grade is C")
}
else if(score > 60){
    console.log("Your Grade is D")
}
else if(score > 50){
    console.log("Your Grade is E")
}
else {
    console.log("You are FAILED")
}