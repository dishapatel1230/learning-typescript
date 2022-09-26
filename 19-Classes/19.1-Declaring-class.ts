class Car{

    //field cannot use var keyword
    engine :string;
    
    //define constructor
    constructor(engine:string){
        this.engine = engine;
    }
    //function  declare with out function keyword
    disp():void{
        console.log("Engine is : " +this.engine);
    }
}

//create an object 
var obj =  new Car("XXSY1");

//access the field
console.log("Reading attribute value Engine : " +obj.engine);

//access the function 
obj.disp();