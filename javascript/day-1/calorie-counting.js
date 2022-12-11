/*
set maxCal = 0
set sum = 0
read file into array
loop through each array item
    if item isn't whitespace, add it to sum
        if maxCal < sum
            maxCal = sum
    if item is whitespace
        sum = 0
return maxCal
*/
const fs = require("fs");

const readFile = (path) => {
	let data = fs.readFileSync(__dirname + path, "utf-8");
	data = data
		.toString()
		.split("\r\n")
		.map((val) => {
			return val == "" ? "" : parseInt(val);
		});
	return data;
};

const getMaxCals = (data) => {
	let maxCals = 0;
	let sum = 0;
	for (let value of data) {
		if (value !== "") {
			sum += value;
			if (maxCals < sum) {
				maxCals = sum;
			}
		} else {
			sum = 0;
		}
	}
	return maxCals;
};

let data = readFile("/input.txt");
console.log(getMaxCals(data));
