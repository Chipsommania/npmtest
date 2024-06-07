const fs = require('fs');
const path = require('path');

const packagesDir = path.join(__dirname, 'packages');
const scope = '@dragorog';

fs.readdirSync(packagesDir).forEach(packageName => {
  const packageJsonPath = path.join(packagesDir, packageName, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    if (!packageJson.name.startsWith(scope)) {
      packageJson.name = `${scope}/${packageJson.name}`;
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    }
  }
});
