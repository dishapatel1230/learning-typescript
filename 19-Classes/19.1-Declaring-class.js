var Car = /** @class */ (function () {
    //define constructor
    function Car(engine) {
        this.engine = engine;
    }
    //function  declare with out function keyword
    Car.prototype.disp = function () {
        console.log("Engine is : " + this.engine);
    };
    return Car;
}());
//create an object 
var obj = new Car("XXSY1");
//access the field
console.log("Reading attribute value Engine : " + obj.engine);
//access the function 
obj.disp();
