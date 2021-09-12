var date1 = new Date("sep 10 2021 02:00:00");
var date2 = new Date("oct 29 2021 02:00:00");

console.log("Date1 = " + date1);
console.log("Date2 = " + date2);

var timeDiff = date2.getTime() - date1.getTime();
console.log("TimeDiff = " + timeDiff);

var timeInDay = 24 * 60 * 60 * 1000;
console.log("Milliseconds in a Day = " + timeInDay);

var daysDiff = timeDiff / timeInDay;
console.log("Days Diff = " + daysDiff);