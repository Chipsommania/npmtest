const fs = require('fs');
const path = require('path');

const packagesDir = path.join(__dirname, 'packages');
const scope = '@dragorog/strapi-plugins';

fs.readdirSync(packagesDir).forEach(packageName => {
  const packageJsonPath = path.join(packagesDir, packageName, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    if (!packageJson.name.startsWith(scope)) {
      const pluginName = packageJson.name.replace('-temp', '');
      const version = packageJson.version;
      packageJson.name = `${scope}-${pluginName}@v${version}`;
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      console.log(`Updated ${packageName}: ${packageJson.name}`);
    }
  }
});
