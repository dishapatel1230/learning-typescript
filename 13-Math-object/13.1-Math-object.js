/* A TypeScript Math object provides no. of properties and methods for performing mathematical operations.
Math is not a constructor and all the properties and methods of Math are static.*/
function mathTest(num) {
    var squreRoot = Math.sqrt(num);
    console.log("Random Number : " + num);
    console.log("Square root : " + squreRoot);
}
var num = Math.random();
mathTest(num);
