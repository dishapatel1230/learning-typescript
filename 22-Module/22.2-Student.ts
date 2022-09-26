import showDetails =  require("./22.1-IshowDetails")
export class Student implements showDetails.IshowDetails {
    public display(){
        console.log("Student Details");
    }
}