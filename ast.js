const process = require('process');
const fs = require('fs')
function print(x){
	process.stdout.write(x.toString())
}

class Expr {

}
class BinaryExpr {
	constructor(op,left,right){
		this.left=left;
		this.op=op;
		this.right=right;
	}
}

class UnaryExpr {
	constructor(op,expr){
		this.op=op;
		this.expr=expr;
	}
}

function printer(expr){
	if(expr instanceof BinaryExpr){
		let {op ,left,right}=expr;
		print("(")
		printer(op)
		printer(left)
		printer(right)
		print(")")
	}
	else if(expr instanceof UnaryExpr){
		printer(expr.op)
		printer(expr.expr)
	}
	else{
		print(expr+" ")
	}
}




module.exports={
	BinaryExpr
}