function printName(theInput) {
    console.log("Name: ".concat(theInput.name, " \nAge: ").concat(theInput.age, " \nProfession: ").concat(theInput.profession));
}
var Player = {
    name: "Kl Rahul", age: 30, profession: "Cricket Player"
};
printName(Player);
