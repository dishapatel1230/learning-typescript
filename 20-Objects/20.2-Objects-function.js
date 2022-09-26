var person = {
    firstName: "Tom",
    lastName: "Hanks"
};
var invokeperson = function (obj) {
    console.log("first name: " + obj.firstName);
    console.log("last name: " + obj.lastName);
};
invokeperson(person);
