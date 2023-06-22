export interface Expression {
    expression: string[];
}

export class BasicExpression  implements Expression {
    expression: string[];
    replacement: string;
    public expressionType: string;

    constructor(expression: string[], replacement: string) {
        this.expression = expression;
        this.replacement = replacement;
        this.expressionType = "BASIC"
    }
}

