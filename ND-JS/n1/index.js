const fs = require("fs");

// fs.writeFileSync("hello.txt", "welcome to nodejs");

// fs.appendFileSync("hello.txt", "hello to nodejs");

const old = fs.readFileSync("hello.txt");
const new1 = old.toString();

console.log(new1);
