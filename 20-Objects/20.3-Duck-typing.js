/* In duck-typing, two objects are considered to be of the same type
if both share the same set of properties.
Duck-typing verifies the presence of certain properties in the objects, rather than their actual type, to check their suitability.
*/
var Sparrow = /** @class */ (function () {
    function Sparrow() {
        this.sound = "cheep";
    }
    return Sparrow;
}());
var Parrot = /** @class */ (function () {
    function Parrot() {
        this.sound = "squawk";
    }
    return Parrot;
}());
var Duck = /** @class */ (function () {
    function Duck() {
        this.sound = "quack";
    }
    Duck.prototype.swim = function () {
        console.log("Going for a dip!");
    };
    return Duck;
}());
var parrot = new Sparrow(); // substitutes
var sparrow = new Parrot(); // substitutes
var parrotTwo = new Duck();
//var duck: Duck = new Parrot(); // IDE & compiler error
console.log("Parrot says: " + parrot.sound);
console.log("sparrow says: " + sparrow.sound);
console.log("parrot says: " + parrotTwo.sound);
