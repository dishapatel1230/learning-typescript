function showNames(...names:string[])
{
    for (var i = 0; i < names.length;i++){
        console.log(names[i]);
    }
}
showNames("Rajeev","Gunjan","Gopi","Ronit");
showNames("Jai","Deep","Alay","Neha","Riya","Krunal");

/*Sometimes we need multiple parameters as a group. 
TypeScript rest parameters used in such situations. 
They are act as the placeholder for multiple arguments of the same type. 
Use the ellipsis (…) as the prefix of rest parameter.*/