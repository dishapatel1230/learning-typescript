import showDetails = require("./22.1-IshowDetails");
export class Teacher implements showDetails.IshowDetails{
    public display() {
        console.log("Teacher details");
    }
}