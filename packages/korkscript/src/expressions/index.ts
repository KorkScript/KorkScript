const logger = require("../logger")
import {Expression, BasicExpression} from "./types"

export const defaultModules = [require("./func.js")]


export function getDefaultExpressions(): any[] {
    let ex: any[] = []
     defaultModules.forEach(module => {
      Object.keys((key: any) => {
        if(key["expressionType"] != undefined) {
          ex.push(key)
        }
      })
    })
    return ex
}