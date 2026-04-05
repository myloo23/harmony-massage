const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', '..', '..', '..', '..', 'Documents', 'GitHub', 'harmony-massage', 'src', 'assets');
const absoluteDir = 'c:\\Users\\milan\\Documents\\GitHub\\harmony-massage\\src\\assets';

fs.readdirSync(absoluteDir).forEach(file => {
  if (file.endsWith('.jpeg')) {
    const oldPath = path.join(absoluteDir, file);
    const newPath = path.join(absoluteDir, file.replace(/\.jpeg$/, '.webp'));
    fs.renameSync(oldPath, newPath);
  }
});
console.log('Done!');
