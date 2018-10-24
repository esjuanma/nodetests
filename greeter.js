var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function sum() {
    var n = 10;
    var m = 20;
    return n + m;
}
var list = [1, 2, 3];
var user = new Student("Jane", "M.", "User");
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK

var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;

document.body.innerHTML = greeter(user);
