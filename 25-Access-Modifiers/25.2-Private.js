/*The private access modifier cannot be accessible outside of its containing class.
It ensures that the class members are visible only to that class in which it is containing. */
var Student = /** @class */ (function () {
    function Student(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    Student.prototype.display = function () {
        return ('My unique code: ' + this.studCode + 'My Name: ' + this.studName);
    };
    return Student;
}());
var studnet = new Student(1, "Ram");
console.log(studnet.display());
