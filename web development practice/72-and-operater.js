var a = 5;
var b = 10;

var c = a < b && b > a;

// it returns us true
console.log(c);

var d = a < b && b >= 10;
//it returns us true
console.log(d);


var e = a > b && b > a;

//it returns us false
console.log(e);