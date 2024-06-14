const path = require("path");

// console.log("0ha ha path fileName", path.basename(__dirname));
// console.log("1ha ha path dirname", path.dirname(__dirname));
// console.log("2ha ha path extname", path.extname(__dirname));

// console.log("2ha ha path extname", path.parse(__filename));

// console.log(path.join(__dirname, "templates", "index.html"));
console.log(path.resolve(__dirname, "./templates", "/index.html"));
