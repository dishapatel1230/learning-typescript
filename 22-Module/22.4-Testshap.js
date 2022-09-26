"use strict";
exports.__esModule = true;
var student = require("./22.2-Student");
var teacher = require("./22.3-Teacher");
function showALLDetails(detailsToShow) {
    detailsToShow.display();
}
showALLDetails(new student.Student());
showALLDetails(new teacher.Teacher());
