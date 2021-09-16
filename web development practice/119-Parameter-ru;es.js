function findGrade(score){
    if (score > 80 && score <=100){
        console.log("Grade A");
    }
    else if (score > 70 && score <80){
        console.log("Grade B");
    }
    else if (score > 60 && score <70){
        console.log("Grade C");
    }
    else if (score > 40 && score <60){
        console.log("Grade D");
    }
    else{
        console.log("Failed");
    }
}

findGrade(parseInt(prompt("Enter your Marks!")));