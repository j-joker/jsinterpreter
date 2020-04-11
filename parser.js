const ast = require('./ast')
const lex=require('./lexer')

const Scanner=lex.Scanner
const TokenTypes=lex.TokenTypes
const BinaryExpr=ast.BinaryExpr
const Primary=ast.Primary
const Operator=ast.Operator
const printer=ast.printer

let code="123 + 23"
let current=0
let x=new Scanner(code)
x.scanTokens()
let tokens=x.tokens


function expr(){
    let left=primary()
    let op=primary()
    let right=primary()
    return new BinaryExpr(op,left,right)
}
function primary(){
    let x=advance()
    switch (x.type){
        case TokenTypes.NUM:
            return new Primary(x.val)
        case TokenTypes.PLUS:
            return new Operator(x.type)
    }
}
function advance(){
    return tokens[current++]
}
printer(expr())