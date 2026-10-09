// Question 3: File Module - Create Log files
// Creates the Logs directory (if it does not exist), changes the current process
// into it, writes 10 log files and prints each file name.

const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

process.chdir(logsDir);

for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `Log file ${i} - created by add.js on ${new Date().toISOString()}\n`);
  console.log(fileName);
}
