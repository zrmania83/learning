const arguments = process.argv.slice(2);
const { exec } = require('child_process');
const fs = require('fs');
let array = [1, 2, 3, 4, 5, 6, 7, 8,9,10];
class Transalpina {
   constructor(x, y) {
    this.add = x+y;
    this.subtract = x-y;  
    this.multiply = x*y;
    this.divide = x/y;
    this.merge = ''+x+y;
	
	}
	
 get getResult() {
	return this.merge;
  }
	
 get resultsForAllOperations() {
	return this;
  }
}

console.log(new Transalpina (array[6],array[5]).add);
console.log(new Transalpina (array[5],array[7]).subtract);
console.log(new Transalpina (array[6],array[5]).multiply);
console.log(new Transalpina (array[0],array[3]).divide);
console.log(new Transalpina (array[1],array[4]).merge);