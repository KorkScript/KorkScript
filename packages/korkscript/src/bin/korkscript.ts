const compiler = require("../compiler")

compiler.runCompiler(__dirname).then((response) => {
    console.log(JSON.stringify(response))
})