import type { CompilerState, CompilerResponse } from "./types"
import { Compiler } from "./types"
const fs = require("fs")
const path = require("path")
const fileutils = require("../utils/fileutils")
const logger = require("../logger")

export function runCompiler(p: string): Promise<CompilerResponse> {
    const promise: Promise<CompilerResponse> = new Promise((resolve, reject) => {
        const compiler: Compiler = new Compiler(p)
        compiler.start()
        let files: string[] = [];
        getFilesToCompile(p).then((f: string[]) => {
            files = f;
            logger.info("Found " + files.length + " files to compile!")
            resolve(compiler.stop(true))
        })
    
    
    })
    return promise;
}

export function getFilesToCompile(p: string): Promise<string[]> {
    const promise = new Promise<string[]>((resolve, reject) => {
        const f: string[] = []
        fileutils.getFileList(p).then((files: string[]) => {
            files.forEach(file => {
                if(file.endsWith(".ks")) {
                    f.push(file)
                }
            })
            resolve(f)
        })
    })
    return promise;
}


export async function compileFile(dir: string) {
    try {
        const content = await fs.readFile(dir, { encoding: 'utf8' });

        let useTypescript: boolean = false;

        if(content.includes("#include typescript")) {
          useTypescript = true;
        }
        

    } catch (err) {
        console.log(err);
    }
}