/*
Create cargoStacks array with input stacks. 
Parse input string for moving cargo from stacks 
    on every line, 
        map the 3 numbers in the string into an array
        push the number array onto a directions array
Create method, moveStack(amount, from, to)
    loop for the 'amount'
        pop cargo off the 'from' stack and onto the 'to' stack of cargoStacks
Create method, readFinalStacks()
    create topCargo string
    for the number of stacks, 
        pop the last cargo, read it into the topCargo, push the cargo back onto the same stack
    return the topCargo string
For every line in the stack directions
    call moveStack with it's parameters
call readFinalStacks() and print return string
*/
let cargoStacks = [
	["Q", "F", "M", "R", "L", "W", "C", "V"],
	["D", "Q", "L"],
	["P", "S", "R", "G", "W", "C", "N", "B"],
	["L", "C", "D", "H", "B", "Q", "G"],
	["V", "G", "L", "F", "Z", "S"],
	["D", "G", "N", "P"],
	["D", "Z", "P", "V", "F", "C", "W"],
	["C", "P", "D", "M", "S"],
	["Z", "N", "W", "T", "V", "M", "P", "C"],
];

const fs = require("fs");
const readFile = (path) => {
	let data = fs.readFileSync(__dirname + path, "utf-8");
	return data;
};

const moveStack = (directions) => {
	let [amount, from, to] = directions;
	let tempStack = [];
	// console.log(amount);
	while (amount--) {
		tempStack.unshift(cargoStacks[from - 1].pop());
		// console.log(cargoStacks[from - 1]);
		// console.log(cargoStacks[to - 1]);
	}
	cargoStacks[to - 1].push(...tempStack);
};

const readFinalStacks = () => {
	let returnString = "";
	for (stack of cargoStacks) {
		let cargo = stack.pop();
		returnString += cargo;
		stack.push(cargo);
	}
	return returnString;
};

let editDirections = readFile("/input.txt");

editDirections = editDirections.split("\n").map((line) => {
	return line.match(/\d+/g);
});
// console.log(editDirections);

for (directions of editDirections) {
	moveStack(directions);
}

console.log(readFinalStacks());
