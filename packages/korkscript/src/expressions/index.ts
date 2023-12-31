const logger = require("../logger")
import {Expression, BasicExpression} from "./types"

export const defaultModules = [require("./func.js")]


export function getDefaultExpressions(): any[] {
    let ex: any[] = []
     defaultModules.forEach(module => {
      Object.keys(module).forEach((key: any) => {
        if(module[key]["expressionType"] != undefined) {
          ex.push(module[key])
        }
      })
    })
    return ex
}