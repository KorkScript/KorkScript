const logger = require("../logger")
import {Expression, BasicExpression} from "./types"

export const defaultModules = [require("./time")]

export function parseExpression(expression: string) {
    defaultModules.forEach(module => {
        Object.keys(module).forEach((key:any) => {
            if(key["expressionType"] != undefined) {
                
            }
            else {
                logger.warn("Expression " + key + "is not valid!")
            }
        }) 
    })
}