const fs = require('fs')
const pr = require("./parser")
const ast = require("./ast")

const Parser = pr.Parser
const printer = ast.printer
function main() {
    let source
    fs.readFile('input.lox', function (err, data) {
        source = data.toString()
        let par = new Parser(source)
        par.init()
       printer(par.expr())
    })

}
main()