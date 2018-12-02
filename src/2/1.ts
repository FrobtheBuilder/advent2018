import _ = require("lodash")
import loadInput from "../util/load-input"

const input = loadInput(__dirname)

let twoDuplicates = 0
let threeDuplicates = 0

for (let line of input) {
    let uniqs = _.uniq(line)
    let twoLineDupes = false
    let threeLineDupes = false
    for (let uniq of uniqs) {
        let instances = 0
        for (let letter of line) {
            if (letter === uniq) {
                instances++
            }
        }
        if (instances === 2) {
            twoLineDupes = true
        }
        if (instances === 3) {
            threeLineDupes = true
        }
    }
    if (twoLineDupes) {
        twoDuplicates++
    }
    if (threeLineDupes) {
        threeDuplicates++
    }
}

console.log(twoDuplicates * threeDuplicates)