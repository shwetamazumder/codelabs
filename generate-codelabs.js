const fs = require('fs');
const path = require('path');

// Root where this script lives
const rootDir = __dirname;

// Codelabs live inside docs/
const codelabsDir = path.join(rootDir, 'docs');

// Output file inside docs/
const outputFile = path.join(codelabsDir, 'codelabs-list.js');

const codelabs = [];

// Loop through all folders inside docs/
fs.readdirSync(codelabsDir, { withFileTypes: true }).forEach(dir => {
  if (dir.isDirectory()) {
    const jsonPath = path.join(codelabsDir, dir.name, 'codelab.json');
    if (fs.existsSync(jsonPath)) {
      const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

      codelabs.push({
        title: data.title,
        duration: data.duration + " min",
        href: `/${dir.name}/index.html`, // absolute path from web root
        id: data.id,
        authors: data.authors,
        updated: data.updated,
        category: data.category,
        tags: data.tags
      });
    }
  }
});

// Write JS file into docs/
fs.writeFileSync(outputFile, `window.CODELABS = ${JSON.stringify(codelabs, null, 2)};`);

console.log("✅ codelabs-list.js generated in docs/");
