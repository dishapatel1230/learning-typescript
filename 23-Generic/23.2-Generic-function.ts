function getItems<T>(items:T[]):T[]{
    return new Array<T>().concat(items);
}
let arrNumber  = getItems<number>([10,20,30]);
let arrString = getItems<string>(["Hello","Good-work"]);
arrNumber.push(40);
arrString.push("Pratice-hard");
console.log(arrNumber);
console.log(arrString);