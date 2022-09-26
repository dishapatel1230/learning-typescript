/*The private access modifier cannot be accessible outside of its containing class. 
It ensures that the class members are visible only to that class in which it is containing. */
class Student{
    public studCode:number;
    private studName:string;
    constructor(code:number,name:string){
        this.studCode =code;
        this.studName = name;
    }
    public display(){
        return ('My unique code: ' + this.studCode + 'My Name: ' + this.studName);
    }
}
let studnet:Student = new Student(1,"Ram");
console.log(studnet.display());