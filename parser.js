const ast = require('./ast')
const lex=require('./lexer')

const Scanner=lex.Scanner

let code="123 + 23"

function parse(){
    let x=new Scanner(code)
    x.scanTokens()
    let tokens=x.tokens

    for(token in tokens){
        console.log(tokens[token])
    }
}
parse()
