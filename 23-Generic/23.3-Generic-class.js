var StudentInfo = /** @class */ (function () {
    function StudentInfo() {
    }
    StudentInfo.prototype.setValue = function (id, name) {
        this.id = id;
        this.name = name;
    };
    StudentInfo.prototype.display = function () {
        console.log("Id = ".concat(this.id, ", Name = ").concat(this.name));
    };
    return StudentInfo;
}());
var st = new StudentInfo();
st.setValue(101, "virat");
st.display();
var std = new StudentInfo();
std.setValue("201", "Rohit");
std.display();
