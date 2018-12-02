import _ = require("lodash")
import loadInput from "../util/load-input"

const input = loadInput(__dirname)

let firstSimilarLine
let secondSimilarLine
for (let line of input) {
    for (let otherLine of input) {
        if (line !== otherLine) {
            let differentCharacters = 0
            for (let i = 0; i<line.length; i++) {
                if (line[i] !== otherLine[i]) {
                    differentCharacters++
                }
            }
            if (differentCharacters === 1) {
                firstSimilarLine = line
                secondSimilarLine = otherLine
            }
        }
    }
}

console.log(firstSimilarLine)
console.log(secondSimilarLine)