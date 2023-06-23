const compiler = require("../compiler")
const logger = require("../logger")
const path = require("path")
import type {CompilerResponse} from "../compiler/types"

let p: string = ""

if(process.argv.length > 2) {
    p = path.resolve(process.argv[2])
}
else {
    p = __dirname
}

compiler.runCompiler(p).then((response: CompilerResponse) => {
    let timeTook: number = (response.endTimestamp - response.startTimestamp) / 1000
    logger.info("Build finished with sucess in " + timeTook + "s")
}).catch((response: CompilerResponse) => {
    let timeTook: number = (response.endTimestamp - response.startTimestamp) / 1000
    logger.warn("Build finished without sucess in " + timeTook + "s")
})