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

const yourPlay = {
	X: 1, // Rock
	Y: 2, // Paper
	Z: 3, // Scissors
};

let sum = 0;

for (let round of rpsGames) {
	// Draw
	if (round[0] === "A" && round[1] === "X") {
		sum += yourPlay[round[1]] + 3;
	}
	// win
	if (round[0] === "A" && round[1] === "Y") {
		sum += yourPlay[round[1]] + 6;
	}
	// loss
	if (round[0] === "A" && round[1] === "Z") {
		sum += yourPlay[round[1]];
	}

	if (round[0] === "B" && round[1] === "Y") {
		sum += yourPlay[round[1]] + 3;
	}
	if (round[0] === "B" && round[1] === "Z") {
		sum += yourPlay[round[1]] + 6;
	}
	if (round[0] === "B" && round[1] === "X") {
		sum += yourPlay[round[1]];
	}

	if (round[0] === "C" && round[1] === "Z") {
		sum += yourPlay[round[1]] + 3;
	}
	if (round[0] === "C" && round[1] === "X") {
		sum += yourPlay[round[1]] + 6;
	}
	if (round[0] === "C" && round[1] === "Y") {
		sum += yourPlay[round[1]];
	}
}

console.log(sum); // right answer: 10310
