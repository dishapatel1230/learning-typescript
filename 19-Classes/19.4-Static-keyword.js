/* The static keyword can be applied to the data members of a class.
 A static variable retains its values till the program finishes execution.
 Static members are referenced by the class name.
*/
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("The value of num : " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 20;
StaticMem.disp();
