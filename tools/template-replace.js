const fs = require("fs");

const FILES_TO_SCAN = ["src/commonjs/index.js"];

const VARIABLES = {
  VERSION: process.env.VERSION,
};

FILES_TO_SCAN.forEach((file) => {
  let content = fs.readFileSync(file, "utf8");
  Object.keys(VARIABLES).forEach((key) => {
    const val = VARIABLES[key];
    const regex = new RegExp(`\\{\\{\\{ ?${key} ?\\}\\}\\}`, "g");
    content = content.replace(regex, val);
  });
  fs.writeFileSync(file, content);
});
