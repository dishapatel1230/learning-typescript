class Student{
     public studcode:number;
     studname:string;
}
let stud = new Student();
stud.studcode = 101;
stud.studname = "Anne Marie";
console.log("Student code is : "+ stud.studcode +  " Student Name is :" +stud.studname);
/*TypeScript by default, all the members (properties and methods) of a class are public. 
 So, there is no need to prefix members with this keyword. 
We can access this data member anywhere without any restriction. 
data members are public, they can be accessed outside of the class using an object of the class.*/