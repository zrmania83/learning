const arguments = process.argv.slice(2);
let first_number = arguments[0].replace('--first_number=', '');
let second_number = arguments[1].replace('--second_number=', '');
let operation = arguments[2].replace('--operation=', '');
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
