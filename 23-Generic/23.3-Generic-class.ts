class StudentInfo <T, U>
{
    private id:T;
    private name:U;
    setValue(id:T,name:U):void{
        this.id = id;
        this.name = name;
    }
    display():void {   
        console.log(`Id = ${this.id}, Name = ${this.name}`);  
    }  
}
let st = new StudentInfo<number ,string>();
st.setValue(101,"virat");
st.display();
let std = new StudentInfo<string ,string>();
std.setValue("201", "Rohit");  
std.display();  