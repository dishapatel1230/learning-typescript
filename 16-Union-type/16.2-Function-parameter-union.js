function disp(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
disp("Priya");
console.log("printing names array");
disp(["Deep", "Kishan", "Ronak", "Diya", "Siya"]);
