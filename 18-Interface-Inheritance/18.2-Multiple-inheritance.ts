interface IPerson { 
    age:number;
    name:string;
 } 
  
 interface IEmployee { 
    empId:string; 
 } 
  
 interface Engineer extends IPerson, IEmployee {}
  
 var obj:Engineer = {name:"Asmita", age:32, empId:"EMP023"}; 
 console.log("Name:  "+obj.name);
 console.log("Age:  "+obj.age);
 console.log("Emp Id:  "+obj.empId);
