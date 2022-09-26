/*  Union types are a powerful way to express a value that can be one of the several types. 
    Two or more data types are combined using the pipe symbol (|) to denote a Union Type.
     Union Type provides the facility to combine one or two types for a variable */
var val:string|number;
val = 30;
console.log("Numeric value of val: " +val);
val = "Good work , Practice";
console.log("String value of val : " +val);
