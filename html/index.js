let name = "John";
let age = 25;

function greet(person) {
    return "Hello, " + person + "!";
}

function isAdult(Age) {
    if (Age >= 18) {
        return true;
    } else {
        return false;
    }
}

for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}

console.log(greet(name));

if (isAdult(age)) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is not an adult.");
}
