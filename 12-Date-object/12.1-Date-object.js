function dateTest(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    console.log("Current Time: " + hours + " : " + minutes + " : " + seconds);
}
var date = new Date();
dateTest(date);
