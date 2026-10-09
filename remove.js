// Question 3: File Module - Remove Log files
// Removes every file in the Logs directory (if it exists), prints each file name,
// and then removes the Logs directory itself.

const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

if (fs.existsSync(logsDir)) {
  const files = fs.readdirSync(logsDir).sort();

  files.forEach((file) => {
    console.log(`delete files...${file}`);
    fs.unlinkSync(path.join(logsDir, file));
  });

  fs.rmdirSync(logsDir);
} else {
  console.log('Logs directory does not exist, nothing to remove.');
}
