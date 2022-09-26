interface people{
    name:string;
    age:number;
}
interface celebrity extends people{
    profession :string;
}
function printName<T extends celebrity>(theInput:T):void{
    console.log(`Name: ${theInput.name} \nAge: ${theInput.age} \nProfession: ${theInput.profession}`);  
    
}
let Player:celebrity = {
    name:"Kl Rahul", age:30, profession:"Cricket Player"
}
printName(Player)