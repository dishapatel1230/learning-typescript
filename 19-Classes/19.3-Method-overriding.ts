class Printerclass {
    doPrint():void{
        console.log("doPrint() from parent class");
    }
}
class StringPrinter extends Printerclass{
        doPrint():void{
            /* The super keyword is used to refer to the immediate parent of a class. 
            The keyword can be used to refer to the super class version of a variable, property or method.*/
            super.doPrint() 
            console.log("doPrint() is printing a string...")
        }
}
var obj = new StringPrinter;
obj.doPrint();