var arr = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100 , 110 , 120 , 130 , 140 , 150 , 160 , 170 , 180 , 190 , 200]

var input = parseInt(prompt("Enter number to find."));

console.log("User Input " , input);

var found = false;

for(var i = 0 ; i < arr.length; i++){
    //console.log(arr[i]);
    if(arr[i] == input){
        console.log("Found " + input + " on index "+i);
        found = true;
        break;
    }
}
if(!found){
console.log("Not Found");
}