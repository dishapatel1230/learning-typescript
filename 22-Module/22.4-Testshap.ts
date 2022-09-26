//The import keyword is used to use the declared module in another file.
import showDetails = require("./22.1-IshowDetails");
import student = require("./22.2-Student");
import teacher = require("./22.3-Teacher");

function showALLDetails(detailsToShow:showDetails.IshowDetails){
     detailsToShow.display();
}

showALLDetails(new student.Student());
showALLDetails(new teacher.Teacher());

/*A module refers to a set of standardized parts or independent units that can be used to construct 
a more complex structure.*/