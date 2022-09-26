/* A class declared with abstract keyword is known as an abstract class.
 An abstract class may or may not contain abstract method. Abstract classes cannot be instantiated.
 A method with no implementation i.e. without braces and followed by a semicolon.
*/
abstract class Department{
    constructor(public name:string){

    }
        printName():void{
            console.log("Department Name: "+this.name);
        }
    abstract printMeeting():void;
}

class AccountingDepartment extends Department{
    constructor() {
        super ("Accounting and Auditing");
    }
    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
 
    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}
let department:Department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();

