import type { CompilerState, CompilerResponse } from "./types"
import { Compiler } from "./types"
const fs = require("fs")
const path = require("path")
const fileutils = require("../utils/fileutils")
const logger = require("../logger")
const expression = require("../expressions")

export async function runCompiler(p: string): Promise<CompilerResponse> {
    const promise: Promise<CompilerResponse> = new Promise((resolve, reject) => {
        const compiler: Compiler = new Compiler(p)
        compiler.start()
        getFilesToCompile(p).then((f: string[]) => {
            logger.info("Found " + f.length + " files to compile!")
            f.forEach((file: string) => async function() {
               compileFile(file)
            })
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

 

export  function compileFile(dir: string): Promise<any[]> {
   const promise: Promise<any[]> = new Promise((resolve, reject) => async function () {
   console.log("compiling file")
   try {
        fs.readFile(dir, { encoding: 'utf8' }).then((content: string) => {
          let useTypescript: boolean = false;

          if(content.includes("#include typescript")) {
            useTypescript = true;
          }
        
          let expressions: any[] = expression.getDefaultExpressions()

          console.log(expressions.toString())

          resolve(expressions)
        })

    } catch (err) {
        console.log(err);
    }
  })
  return promise;
}