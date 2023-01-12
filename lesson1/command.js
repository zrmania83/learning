const argvs = process.argv
const argv = argvs.slice(2)
const operation = argv[0]
console.log(operation);

const first_number = 25
const second_number = 5

if (operation === 'add') {
    console.log(' Result for 25 + 5 = '
        + (first_number + second_number));
}
if (operation === 'substract') {
    console.log('Result for 25 - 5 = '
        + (first_number - second_number));
}
if (operation === 'multiply') {
    console.log(' Result for 25 * 5 = '
        + (first_number * second_number));
}
if (operation === 'divide') {
    console.log(' Result for 25 / 5 = '
        + (first_number / second_number));
}
