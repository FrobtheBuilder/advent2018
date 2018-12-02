import fs = require("fs")
import path = require("path")

const file = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {encoding: "utf-8"})

let total = 0
let values = [0]
let duplicatedValue: number = undefined
const splitFile = file.split("\n")
while (duplicatedValue === undefined) {
    for (let line of splitFile) {
        if (line[0] == "+") {
            total += Number(line.slice(1))
        }
        else {
            total -= Number(line.slice(1))
        }
        if (values.indexOf(total) > -1) {
            duplicatedValue = total
            console.log(duplicatedValue)
        }
        values.push(total)
    }
}
