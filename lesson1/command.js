const arguments = process.argv.slice(2);
let command = arguments.filter(element => element.includes('--command=')).toString().replace('--command=', '');
const { exec } = require('child_process');
exec(command , (err, stdout, stderr) => {
  if (err) {
       console.error(err)
  } else {
   console.log(stdout);
   }
}); 