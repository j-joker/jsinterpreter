let TokenTypes = {
	LEFT_PAREN:1,
	RIGHT_PAREN:2,
	PLUS:3,
	MINUS:4,
	EQUAL:5,
	EQUAL_EQUAL:6,


}
class Scanner {
	constructor(source){
		this.tokens=[]
		this.source=source
		this.start=0;
		this.current=0;
	}
	scanTokens(){

	}
	scanToken(){
		let c=advance()
		switch (c){
			// 符号
			case '(':addToken(TokenTypes.LEFT_PAREN,null);break;
			case ')':addToken(TokenTypes.RIGHT_PAREN,null);break;
			case '+':addToken(TokenTypes.PLUS,null);break;
			case '-':addToken(TokenTypes.MINUS,null);break;
			// 需要向前看才能处理的符号
			case '=':addToken(match('=') ? TokenTypes.EQUAL_EQUAL : TokenTypes.EQUAL);break;
			

		}

	}
	addToken(type,val){
		return new Token(type,val)
	}
	advance(){
		return this.source[current++]
	}
	match(x){
		if(this.source[current] === x){
			current++:
			return true;
		}
		return false;
	}

}
class Token {
	constructor(val,type){
		this.val=val
		this.type=type
	}
}