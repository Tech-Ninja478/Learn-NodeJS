console.log("Hello World!");

// console.log(global);

const os = require("os");
const path = require("path");
const { add } = require("./Math");
const { subtract } = require("./Math");
const { multiply } = require("./Math");
const { divide } = require("./Math");

console.log(add(2, 3));
console.log(subtract(8, 6));
console.log(multiply(2, 3));
console.log(divide(10, 4));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
