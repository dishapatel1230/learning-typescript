function add(a:string, b:string):string;

function add(a:number, b:number): number;

function add(a: any, b:any): any {
    return a + b;
}

let ab = add(1,1);
console.log(ab);

let d = add("A" ,"B");
console.log(d);