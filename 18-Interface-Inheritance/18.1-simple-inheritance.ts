/*An interface can be extended by other interfaces. 
In other words, an interface can inherit from other interface. 
Typescript allows an interface to inherit from multiple interfaces. */
interface Person{
    age:number;

}
interface Musican extends Person{
    instrument:string;
}
var drummer = <Musican>{};
drummer.age = 26;
drummer.instrument = "Drums";
console.log("Age :" + drummer.age);
console.log("Instrumet: "+ drummer.instrument);
