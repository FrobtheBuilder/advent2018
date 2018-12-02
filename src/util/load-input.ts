import _ = require("lodash")
import fs = require("fs")
import path = require("path")

export default function loadInput(dirname: string) {
    return fs.readFileSync(path.resolve(dirname, "input.txt"), {encoding: "utf-8"}).split("\n")
}