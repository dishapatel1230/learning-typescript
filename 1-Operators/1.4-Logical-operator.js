var avg = 20;
var percentage = 90;
console.log("Value of avg: " + avg + " Value of percentage : " + percentage);
var result = ((avg > 50) && (percentage > 80));
console.log("(avg>50) && (percentage>80) :", result);
var result = ((avg > 50) || (percentage > 80));
console.log("(avg>50) || (percentage>80) : ", result);
var result = !((avg > 50) && (percentage > 80));
console.log("!((avg>50)&&(percentage>80)) :", result);
