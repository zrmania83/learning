const arguments = process.argv.slice(2);
const fs = require('fs');
let name = arguments.filter(element => element.includes('--name=')).toString().replace('--name=', '');

for (var a = 300; a < 341; a+=2) {
	console.log(a);
}
for (var b = 500; b > 395; b-=5) {
	console.log(b);
}

// reverse 
    const ReverseString = str => [...str].reverse().join('');
   console.log(ReverseString(name))  

const Console = new console.Console(fs.createWriteStream('work.txt'));
Console.log((a),(b), ReverseString(name));