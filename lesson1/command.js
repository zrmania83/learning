const arguments = process.argv.slice(2);
let command = arguments.filter(element => element.includes('--command=')).toString().replace('--command=', '');
let  ToDo= arguments.filter(element => element.includes('--ToDo=')).toString().replace('--ToDo=', '');
const { exec } = require('child_process');
exec(command + ToDo, (err, stdout, stderr) => {
  if (err) {
       console.error(err)
  } else {
   console.log(stdout);
   }
});