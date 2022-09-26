var person ={
    firstName:"Tom",
    lastName:"Hanks"
};

var invokeperson = function(obj:{firstName:string,lastName:string}){
    console.log("first name: " +obj.firstName);
    console.log("last name: " +obj.lastName);
}
invokeperson(person);