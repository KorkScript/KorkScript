const compiler = require("../compiler")

export {}

console.log(await compiler.runCompiler(__dirname))