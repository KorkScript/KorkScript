const logger = require("../logger")
import {Expression, BasicExpression} from "./types"

export const defaultModules = [require("./func")]


export function getDefaultExpressions(): any[] {
    let ex: any[] = []
     defaultModules.forEach(module => {
      Object.keys(key => {
        if(key["expressionType"] != undefined) {
          ex.push(key)
        }
      })
    })
    return ex
}