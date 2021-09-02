var a = 6;
var b = 8;
var c = a && b;
console.log("C = "+c);


var a = 0;
var b = 8;
var c = a && b;
console.log("C = "+c);

var a = true;
var b = 0;
var c = a && b;
console.log("C = "+c);

var a = true;
var b = false;
var c = a && b;
console.log("C = "+c);

var a = true;
var b = "";
var c = a && b;
console.log("C = "+c);

var a = true;
var b = null;
var c = a && b;
console.log("C = "+c);

var a = true;
var b = null;
var c = "";
var d = a && b && c;
console.log("D = "+d);

var a = true;
var b = 0;
var c = "";
var d = a && b && c;
console.log("D = "+d);





var a = 6;
var b = 8;
var c = a || b;
console.log("C = "+c);


var a = 0;
var b = 8;
var c = a || b;
console.log("C = "+c);

var a = true;
var b = 0;
var c = a || b;
console.log("C = "+c);

var a = true;
var b = false;
var c = a || b;
console.log("C = "+c);

var a = true;
var b = "";
var c = a || b;
console.log("C = "+c);

var a = {};
var b = true;
var c = a || b;
console.log("C = "+c);

var a = 0;
var b = "cat";
var c = "";
var d = a || b || c;
console.log("D = "+d);

var a = "";
var b = 0;
var c = "cat";
var d = a || b || c;
console.log("D = "+d);