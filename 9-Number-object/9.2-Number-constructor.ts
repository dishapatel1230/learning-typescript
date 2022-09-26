//TypeScript Number object by using Number() constructor. It returns NaN if value is not a number.
function Employee(id:number,name:string) { 
   this.id = id 
   this.name = name 
} 

var emp = new Employee(123,"Smith") 
Employee.prototype.email = "smith@abc.com" 

console.log("Employee 's Id: "+emp.id) 
console.log("Employee's name: "+emp.name) 
console.log("Employee's Email ID: "+emp.email)