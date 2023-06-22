import type { CompilerState, CompilerResponse } from "./types"
import { Compiler } from "./types"
const fs = require("fs")
const path = require("path")
const fileutils = require("../utils/fileutils")


export function runCompiler(path: string): Promise<CompilerResponse> {
    const promise: Promise<CompilerResponse> = new Promise((resolve, reject) => {
        const compiler: Compiler = new Compiler(path)
        compiler.start()
        let files: string[] = [];
        getFilesToCompile(path).then((f: string[]) => {
            files = f;
        })
    
    })
    return promise;
}

export function getFilesToCompile(path: string): Promise<string[]> {
    const promise = new Promise((resolve, reject) => {
        const f: string[] = []
        fileutils.getFileList(path).then((files: string[]) => {
            files.forEach(file => {
                if(file.endsWith(".ks")) {
                    f.push(path.join(path, file))
                }
            })
        })
        resolve(f)
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