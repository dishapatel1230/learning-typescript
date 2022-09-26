/* The static keyword can be applied to the data members of a class.
 A static variable retains its values till the program finishes execution. 
 Static members are referenced by the class name.
*/
class StaticMem {
    static num:number;
    static disp():void{
        console.log("The value of num : "+StaticMem.num);
    }
}
StaticMem.num= 20;
StaticMem.disp();
