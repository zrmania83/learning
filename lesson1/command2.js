const argvs = process.argv
const argv = argvs.slice(2)
const operation = argv[0]
const first_number = parseInt(argv[1])
const second_number = parseInt(argv[2])
 
if (operation === 'add') {
    console.log( 'Result for first_number + second_number = '
        +(first_number + second_number));
}
if (operation === 'substract') {
    console.log('Result for first_number - second_number = '
        + (first_number - second_number));
}
if (operation === 'multiply') {
    console.log('Result for first_number * second_number ='
        + (first_number * second_number));
}
if (operation === 'divide') {
    console.log(' Result first_number / first_number / second_number ='
        + (first_number / second_number));
}