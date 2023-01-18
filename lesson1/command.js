const { exec } = require('child_process');
exec('start cmd.exe /k "dir"', (err, stdout, stderr) => {
  if (err) {
       console.error(err)
  } else {
   console.log(stdout);
   console.log(stderr);
  }
});