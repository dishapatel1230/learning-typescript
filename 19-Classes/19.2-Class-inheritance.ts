class Shape{
    Area:number
    constructor(a:number){
        this.Area = a;
    }  
}
class Circle extends Shape {
    disp():void{
         console.log("Area of the circle:" +this.Area);
    }
}
var object = new Circle(223);
object.disp();