const arguments = process.argv.slice(2);
const fs = require('fs');
let name = arguments.filter(element => element.includes('--name=')).toString().replace('--name=', '');

// -- constructing first line
let firstLine = '';
for (let a = 300; a <= 340; a+=2) {
	firstLine += `${a},`
}
firstLine = firstLine.slice(0,-1);

// -- constructing second line
let secondLine = '';
for (let b = 500; b >= 400; b-=5) {
	secondLine += `${b},`
}
secondLine = secondLine.slice(0,-1);

// -- constructing third line
let thirdLine = [...name].reverse().join('');

// -- write data to file
fs.writeFileSync('work.txt', `${firstLine}\r\n${secondLine}\r\n${thirdLine}`);
