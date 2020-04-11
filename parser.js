const ast = require('./ast')
const lex=require('./lexer')

const Scanner=lex.Scanner
const TokenTypes=lex.TokenTypes
const BinaryExpr=ast.BinaryExpr
const Primary=ast.Primary
const Operator=ast.Operator
const printer=ast.printer

let current=0
let tokens=[];

class Parser {
    constructor(source){
        this.source=source
    }
    init(){
        let scan=new Scanner(this.source)
        scan.scanTokens()
        tokens=scan.tokens
    }
     expr(){
        let left=this.primary()
        let op=this.primary()
        let right=this.primary()
        return new BinaryExpr(op,left,right)
    }
     primary(){
        let x=this.advance()
        switch (x.type){
            case TokenTypes.NUM:
                return new Primary(x.val)
            case TokenTypes.PLUS:
                return new Operator(x.type)
        }
    }
     advance(){
        return tokens[current++]
    }
}


module.exports={
    Parser
}