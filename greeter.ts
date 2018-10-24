class Student {
	fullName: string;
	constructor(public firstName: string, public middleInitial: string, public lastName: string) {
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function greeter(person: Person) {
	return "Hello, " + person.firstName + " " + person.lastName;
}

function sum() {
    const n: number = 10;
	const m: number = 20;
	return n + m;
}

let list: number[] = [1, 2, 3];

let user = new Student("Jane", "M.", "User");

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

document.body.innerHTML = greeter(user);