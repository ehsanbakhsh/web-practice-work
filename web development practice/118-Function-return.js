function calculateScore(math , physics, english ,chemistry ,urdu){
    return (math + physics + english + chemistry + urdu);
}

function findGrade(score){
    if (score > 450 && score <=500){
        console.log("Grade A");
    }
    else if (score > 350 && score <450){
        console.log("Grade B");
    }
    else if (score > 300 && score <350){
        console.log("Grade C");
    }
    else if (score > 200 && score <300){
        console.log("Grade D");
    }
    else{
        console.log("Failed");
    }
}


var scoreMath = parseInt(prompt("Enter Marks of Math"));
var scorePhysics = parseInt(prompt("Enter Marks of Physics"));
var scoreEnglish = parseInt(prompt("Enter Marks of English"));
var scoreChemistry = parseInt(prompt("Enter Marks of Chemistry"));
var scoreUrdu = parseInt(prompt("Enter Marks of Urdu"));

var score1 = calculateScore(scoreMath , scorePhysics , scoreEnglish , scoreChemistry , scoreUrdu);
console.log(score1);

findGrade(score1);