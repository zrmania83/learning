// -- Match class
class MathWork {
    // -- define local variables
    x = 0;
    y = 0;
	  operations = ['add', 'substract', 'multiply', 'divide', 'merge'];
    result = {
        add: 0,
        substract: 0,
        multiply: 0,
        divide: 0,
        merge: null
    };
    lastCommand = null;

    // -- class constructor
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add() {
        this.result.add = this.x + this.y;
        this.lastCommand = 'add';
    }

    substract() {
        this.result.substract = this.x - this.y;
        this.lastCommand = 'substract';
    }

    multiply() {
        this.result.multiply = this.x * this.y;
        this.lastCommand = 'multiply';
    }

    divide() {
        this.result.divide = this.x / this.y;
        this.lastCommand = 'divide';
    }

    merge() {
        this.result.merge = `${this.x}${this.y}`;
        this.lastCommand = 'merge';
    }

	  // -- returns a list of available operations
	  getOperations(){
		    return this.operations;
	  }
	
    // -- only used for debugging, not mandatory
    getLastCommand() {
        return this.lastCommand;
    }

    // -- get latest called command result
    getResult() {
        return this.result[this.lastCommand];
    }

    // -- get a group math result
    getResultsForAllOperations() {
        this.add();
        this.substract();
        this.multiply();
        this.divide();
        this.merge();
        return this.result;
    }
}

// -- boot

const values = [{x: 10, y: 5},{x: 20, y: 5},{x: 30, y: 5},{x: 40, y: 5},{x: 50, y: 5},{x: 60, y: 5},{x: 70, y: 5},{x: 80, y: 5},{x: 90, y: 5},{x: 100, y: 5}];
for (let item of values) {
    let classInstance = new MathWork(item.x, item.y);
	  const availableOperations = classInstance.getOperations();
    const randomOperation = availableOperations[Math.floor(Math.random() * availableOperations.length)];
    const operationCall = eval(`classInstance.${randomOperation}()`);
    console.log(`Result for ${classInstance.getLastCommand()}(${item.x}, ${item.y}) is: ${classInstance.getResult()}`);
    console.table(classInstance.getResultsForAllOperations());
	  classInstance = null;
}
