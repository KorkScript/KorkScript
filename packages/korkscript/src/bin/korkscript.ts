const compiler = require("../compiler")
import type {CompilerResponse} from "../compiler/types"

compiler.runCompiler(__dirname).then((response: CompilerResponse) => {
    console.log(JSON.stringify(response))
})