// var a = 67;

// function test(num){
//     console.log("Num Before = " +num);
//     num = 4;
//     console.log("Num After = " +num);
// }

// test(a);
// console.log("A After = " +a);


// ///////////////////////////////////////////////////////////////


// var a = [5 , 10 , 15 , 20];

// function test(val){
//     console.log("Val Before = " +val);
//     val[2] = 12;
//     console.log("  Val After = " +val);
// }

// test(a);
// console.log("A After = " +a);


// /////////////////////////////////////////////////////////////////


var a = [5 , 10 , 15 , 20];

function test(val){
    console.log("Val Before = " +val);
    val = [2 , 1 , 8 , 3];
    val[2] = 12;
    console.log("  Val After = " +val);
}

test(a);
console.log("A After = " +a);