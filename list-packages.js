const fs = require('fs');
const path = require('path');

const packagesDir = path.join(__dirname, 'packages');
const packages = fs.readdirSync(packagesDir).filter(file => fs.statSync(path.join(packagesDir, file)).isDirectory());

console.log(JSON.stringify(packages));
