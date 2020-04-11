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

class Primary {
	constructor(val){
		this.val=val
	}
}
class Operator{
	constructor(type){
		this.type=type
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
	else if(expr instanceof Primary){
		print(expr.val)
	}else if(expr instanceof Operator){
		print(expr.type)
	}
}





module.exports={
	BinaryExpr
}