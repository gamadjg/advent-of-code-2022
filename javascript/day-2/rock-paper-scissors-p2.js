const fs = require("fs");

const readFile = (path) => {
	let data = fs.readFileSync(__dirname + path, "utf-8");
	data = data.split("\n");
	data = data.map((val) => {
		return val.split(" ");
	});
	return data;
};

rpsGames = readFile("/input.txt");

const opponentPlay = {
	A: 1, // Rock
	B: 2, // Paper
	C: 3, // Scissors
};

let sum = 0;

for (let round of rpsGames) {
	// Draw
	if (round[1] === "Y") {
		sum += opponentPlay[round[0]] + 3;
	}
	// win
	if (round[1] === "Z") {
		if (round[0] === "C") {
			sum += 7;
		} else {
			sum += opponentPlay[round[0]] + 1 + 6;
		}
	}
	// loss
	if (round[1] === "X") {
		if (round[0] === "A") {
			sum += 3;
		} else {
			sum += opponentPlay[round[0]] - 1;
		}
	}
}

console.log(sum); // p2: 14859
