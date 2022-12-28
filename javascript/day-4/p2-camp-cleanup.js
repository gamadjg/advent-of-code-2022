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
    If cleanupArea[0] is between cleanupArea[2] andcleanupArea[3]
        increment overlaps by one
    If cleanupArea[1] is greater than cleanupArea[2] && cleanupArea[3]
        increment overlaps by one
	If cleanupArea[2] is between cleanupArea[0] andcleanupArea[1]
        increment overlaps by one
    If cleanupArea[3] is greater than cleanupArea[0] && cleanupArea[1]
        increment overlaps by one
*/

cleanupArea = cleanupArea.split("\n").map((values) => {
	return values.split(/[-,]/);
});

let overlaps = 0;

for (let area of cleanupArea) {
	if (
		parseInt(area[0]) >= parseInt(area[2]) &&
		parseInt(area[0]) <= parseInt(area[3])
	) {
		overlaps++;
	} else if (
		parseInt(area[1]) >= parseInt(area[2]) &&
		parseInt(area[1]) <= parseInt(area[3])
	) {
		overlaps++;
	} else if (
		parseInt(area[2]) >= parseInt(area[0]) &&
		parseInt(area[2]) <= parseInt(area[1])
	) {
		overlaps++;
	} else if (
		parseInt(area[3]) >= parseInt(area[0]) &&
		parseInt(area[3]) <= parseInt(area[1])
	) {
		overlaps++;
	}
}

console.log(overlaps);
