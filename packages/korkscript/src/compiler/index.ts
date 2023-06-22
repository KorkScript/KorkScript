import type { CompilerState, CompilerResponse } from "./types"
import { Compiler } from "./types"
const fs = require("fs")



export function runCompiler(path: string): Promise<CompilerResponse> {
    const promise: Promise<CompilerResponse> = new Promise((reject, resolve) => {
        const compiler: Compiler = new Compiler(path)
        compiler.start()
        resolve(compiler.stop(true))
    })
    return promise;
}






export async function compileFile(dir: string) {
    try {
        const content = await fs.readFile(dir, { encoding: 'utf8' });

        

    } catch (err) {
        console.log(err);
    }
}