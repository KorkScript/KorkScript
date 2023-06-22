import type { CompilerState, CompilerResponse } from "./types"
import { Compiler } from "./types"
const fs = require('fs');

let compiler: Compiler = undefined;


export async function runCompiler(path: string): CompilerResponse {
    compiler = new Compiler(path)
    compiler.start()
    return compiler.stop()
}






export async function compileFile(dir: string) {
    try {
        const content = await fs.readFile(dir, { encoding: 'utf8' });

        

    } catch (err) {
        console.log(err);
    }
}