import fs = require("fs")
import path = require("path")

const file = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {encoding: "utf-8"})

let total = 0
for (let line of file.split("\n")) {
    if (line[0] == "+") {
        total += Number(line.slice(1))
    }
    else {
        total -= Number(line.slice(1))
    }
}

console.log(total)