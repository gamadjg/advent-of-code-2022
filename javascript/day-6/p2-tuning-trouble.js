/*
Create empty object buffer
for every character
    if the buffer size is not length 4
        if the character is in the buffer
            while buffer[0] is not equal to current character
                shift the buffer values
            
        else
            add it in with with the key as the character and the index as the value
    else
        return the current stream index - 1
*/

const fs = require("fs");
const readFile = (path) => {
	let data = fs.readFileSync(__dirname + path, "utf-8");
	return data;
};

const findBufferEnd = (stream) => {
	let buffer = [];
	for (let [index, current] of stream.entries()) {
		if (buffer.length < 14) {
			if (buffer.includes(current)) {
				while (buffer[0] !== current) {
					buffer.shift();
				}
				buffer.shift();
			}
			buffer.push(current);
		} else {
			return index;
		}
	}
	return "No message found.";
};

let stream = readFile("/input.txt"); // 3120
// let stream = "mjqjpqmgbljsphdztnvjfqwrcgsmlb"; // 19
// let stream = "bvwbjplbgvbhsrlpgdmjqwftvncz"; // 23
// let stream = "nppdvjthqldpwncqszvftbrmjlhg"; // 23
// let stream = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"; // 29
// let stream = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"; // 26

stream = stream.split("");
console.log(findBufferEnd(stream));
