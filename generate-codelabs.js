// generate-codelabs.js
// This script scans all CLAAT codelab.json files under docs/
// and generates docs/codelabs-list.js for use on the landing page

const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');                  // CLAAT output folder
const outputFile = path.join(docsDir, 'codelabs-list.js');    // Output JS

// Read all folders inside docs/
const folders = fs.readdirSync(docsDir);

const codelabs = folders
  .map(folder => {
    const codelabJsonPath = path.join(docsDir, folder, 'codelab.json');

    // Skip folders without codelab.json
    if (!fs.existsSync(codelabJsonPath)) return null;

    const data = JSON.parse(fs.readFileSync(codelabJsonPath, 'utf8'));

    // Return only the fields needed for landing page
    return {
      title: data.title,
      //duration: data.duration ? `${data.duration} min` : "",
      href: `docs/${folder}/index.html`,
      //id: data.id,
      //authors: data.authors || "",
      //updated: data.updated,
      category: data.category || [],
      tags: data.tags || []
    };
  })
  .filter(Boolean)
  .sort((a, b) => new Date(b.updated) - new Date(a.updated)); // Sort newest first

// Generate JS file content
const outputContent = `
// AUTO-GENERATED FILE - DO NOT EDIT
window.CODELABS = ${JSON.stringify(codelabs, null, 2)};
`;

fs.writeFileSync(outputFile, outputContent);

console.log(`✅ Generated docs/codelabs-list.js with ${codelabs.length} codelabs.`);
