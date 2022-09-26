function getItems(items) {
    return new Array().concat(items);
}
var arrNumber = getItems([10, 20, 30]);
var arrString = getItems(["Hello", "Good-work"]);
arrNumber.push(40);
arrString.push("Pratice-hard");
console.log(arrNumber);
console.log(arrString);
