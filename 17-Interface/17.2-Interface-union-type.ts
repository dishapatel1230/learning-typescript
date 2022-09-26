interface Runoption{
    program:string;
    commandline : string[]|string|(()=>string);
}
var options:Runoption = {program:"test1",commandline:"Good work"};
console.log(options.commandline)

options = {program:"test1",commandline:["Good","Bye"]};
console.log(options.commandline[0]);
console.log(options.commandline[1]);

options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 

var fn:any  =options.commandline;
console.log(fn());

