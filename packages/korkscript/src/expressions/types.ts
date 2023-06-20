export interface Expression {
    expression: string[];
}

export class BasicExpression  implements Expression {
    expression: string[];
    replacement: string;

    constructor(expression: string[], replacement: string) {
        this.expression = expression;
        this.replacement = replacement;
    }
}

