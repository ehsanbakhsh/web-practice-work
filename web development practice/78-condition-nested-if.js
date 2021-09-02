var score = prompt("Write score more then 80 to see example of nested if,else and else if otherwise all numbers under 95 are failed.");

score = parseInt(score);

if (score > 80){
    console.log("Grade A");
     if(score >= 95){
         console.log("Reward $100");
     }
     else if (score >85){
         console.log("Reward $50")
     }
     else{
         console.log("Reward $20")
     }
}
else{
    console.log("Failed");
}