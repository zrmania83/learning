const arguments = process.argv.slice(2);
let first_number = arguments.filter(element => element.includes('--first_number=')).toString().replace('--first_number=', '');
let second_number = arguments.filter(element => element.includes('--second_number=')).toString().replace('--second_number=', '');
let operation = arguments.filter(element => element.includes('--operation=')).toString().replace('--operation=', '');
switch (operation) {
    case 'add':
        console.log(`Result for ${first_number} + ${second_number} = ${parseInt(first_number) + parseInt(second_number)}`);
        break;
    case 'substract':
        console.log(`Result for ${first_number} - ${second_number} = ${parseInt(first_number) - parseInt(second_number)}`);
        break;
    case 'multiply':
        console.log(`Result for ${first_number} * ${second_number} = ${parseInt(first_number) * parseInt(second_number)}`);
        break;
    case 'divide':
        console.log(`Result for ${first_number} / ${second_number} = ${parseInt(first_number) / parseInt(second_number)}`);
        break;
}
