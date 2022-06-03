const sass = require("sass");
const path = require("path");
const fs = require("fs");

const entryDir = path.resolve(__dirname, "scss");
const outputDir = path.resolve(__dirname, "css");

const entryFile = path.resolve(entryDir, "main.scss");
const outputFile = path.resolve(outputDir, "output.css");

if (!fs.existsSync(outputDir)) {
  fs.mkdir(outputDir, (err) => console.log(err));
}
fs.writeFile(outputFile, sass.compile(entryFile).css, (err) =>
  console.log(err)
);
