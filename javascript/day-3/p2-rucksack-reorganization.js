const fs = require("fs");
const readFile = (path) => {
	let data = fs.readFileSync(__dirname + path, "utf-8");
	data = data.split("\n");
	return data;
};

ruckSackData = readFile("/input.txt");
// ruckSackData = readFile("/test.txt");

/*
Create a group for every 3 rucksack sets. 
For each group 
	check to see if the items of ruck set 0 are in ruck set 1
		if true, check to see if the same item can be found in ruck set 2
			if item found in all 3 ruck sets, convert item to ascii, calc item code, and add to sum. 
*/

let groups = [];
let sum = 0;

for (let i = 0; i < ruckSackData.length; i += 3) {
	groups.push([
		new Set(ruckSackData[i]),
		new Set(ruckSackData[i + 1]),
		new Set(ruckSackData[i + 2]),
	]);
}

for (const group of groups) {
	for (const item of group[0]) {
		if (group[1].has(item)) {
			if (group[2].has(item)) {
				if (item === item.toUpperCase()) {
					sum += item.charCodeAt(0) - 38;
				} else {
					sum += item.charCodeAt(0) - 96;
				}
			}
		}
	}
}

console.log(sum);
