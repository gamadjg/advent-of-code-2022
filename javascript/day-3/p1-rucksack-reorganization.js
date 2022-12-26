const fs = require("fs");
const readFile = (path) => {
	let data = fs.readFileSync(__dirname + path, "utf-8");
	data = data.split("\n");
	return data;
};

ruckSackData = readFile("/input.txt");
// ruckSackData = readFile("/test.txt");

/*
create sum = ;
for each line in the input array
    take the length of the line
    divide by two to find the middle of the line
    for each character in the left, iterate through all characters on the fight
        if a similar item (uppercase/lowercase letter) is found, add the priority of the item to the sum
            if letter is uppercase, convert to ascii and subtract by 38 to get priority. 
            if letter is lowercase, convert to ascii and subtract by 96 to get priority. 
        break out of inner loop
*/

let sum = 0;

for (let ruckSack of ruckSackData) {
	ruckSack = ruckSack.split("");
	let length = ruckSack.length;
	let mid = length >> 1;
	let found = false;
	for (let leftItem = 0; leftItem < mid; leftItem++) {
		if (found) {
			break;
		} else {
			for (let rightItem = mid; rightItem < length; rightItem++) {
				if (ruckSack[leftItem] === ruckSack[rightItem]) {
					if (ruckSack[leftItem] === ruckSack[leftItem].toUpperCase()) {
						sum += ruckSack[leftItem].charCodeAt(0) - 38;
					} else {
						sum += ruckSack[leftItem].charCodeAt(0) - 96;
					}
					// console.log(ruckSack[leftItem], sum);
					found = true;
					break;
				}
			}
		}
	}
}
console.log(sum);
