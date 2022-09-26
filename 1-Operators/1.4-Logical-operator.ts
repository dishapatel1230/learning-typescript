var avg:number = 20;
var percentage:number = 90;

console.log("Value of avg: " + avg + " Value of percentage : " +percentage);

var result:boolean = ((avg>50) && (percentage>80));
console.log("(avg>50) && (percentage>80) :" ,result);

var result:boolean = ((avg>50) || (percentage>80));
console.log("(avg>50) || (percentage>80) : ",result);

var result:boolean =!((avg>50)&&(percentage>80));
console.log("!((avg>50)&&(percentage>80)) :",result);
