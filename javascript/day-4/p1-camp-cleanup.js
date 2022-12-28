const fs = require("fs");
const readFile = (path) => {
	let data = fs.readFileSync(__dirname + path, "utf-8");
	return data;
};

let cleanupArea = readFile("/input.txt");
// let cleanupArea = readFile("/test.txt");

/*
Split input data by newline into an array
Split the line item by commas or dashes
Create overlaps value

For ever item in the cleanupArea list
    If cleanupArea[0] is less than cleanupArea[2] && cleanupArea[1] is greater than cleanupArea[3]
        increment overlaps by one
    If cleanupArea[0] is greater than cleanupArea[2] && cleanupArea[1] is greater than cleanupArea[3]
        increment overlaps by one
*/

cleanupArea = cleanupArea.split("\n").map((values) => {
	return values.split(/[-,]/);
});

let overlaps = 0;

for (let area of cleanupArea) {
	if (
		(parseInt(area[0]) <= parseInt(area[2]) &&
			parseInt(area[1]) >= parseInt(area[3])) ||
		(parseInt(area[0]) >= parseInt(area[2]) &&
			parseInt(area[1]) <= parseInt(area[3]))
	) {
		overlaps++;
	}
}

console.log(overlaps);
