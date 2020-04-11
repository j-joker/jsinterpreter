let TokenTypes = {
	LEFT_PAREN:1,
	RIGHT_PAREN:2,
	PLUS:3,
	MINUS:4,
	EQUAL:5,
	SLASH:6,
	EQUAL_EQUAL:7,
	STRING:8,
	NUM:9,
	// keywords
	AND:10,
	IF:11


}
const keywords={
	and:TokenTypes.AND,
	if:TokenTypes.IF
}
class Scanner {
	constructor(source){
		this.tokens=[]
		this.source=source
		this.start=0;
		this.current=0;
	}
	scanTokens(){
		while(!this.isEnd()){
			this.scanToken()
		}
	}
	scanToken(){
		let c=this.advance()
		switch (c){
			// 符号
			case '(':addToken(TokenTypes.LEFT_PAREN,null);break;
			case ')':addToken(TokenTypes.RIGHT_PAREN,null);break;
			case '+':addToken(TokenTypes.PLUS,null);break;
			case '-':addToken(TokenTypes.MINUS,null);break;
			// 需要向前看才能处理的符号
			case '=':addToken(this.ifMatchKeepMove('=') ? TokenTypes.EQUAL_EQUAL : TokenTypes.EQUAL);break;
			case '/':
				if(this.ifMatchKeepMove('/')){
					while(this.ifUnmatchKeepMove('\n') || !isEnd());
				}else{
					addToken(TokenTypes.SLASH)
				}
			case ' ':
			case '\n':
			case '\t':
			case '\r':
				this.current++;
				break;

			case '"':
				this.string();break;
			default:
				if(this.isDigit(c)){
					this.num();
				}else{
					console.log("unmatched "+ c)
				}
		}
		

	}
	isDigit(x){
		if(x >= '0' && x<= '9')
			return true;
		return false;
	}
	num(){
		while(this.isDigit(this.source[this.current])){
			this.advance();
		}
		let intVal=this.source.substring(this.start,this.current)
		this.addToken(TokenTypes.NUM,parseInt(intVal))
	}
	string(){
		while(this.ifUnmatchKeepMove('"'));
		let str=this.source.substring(this.start+1,this.current)
		this.current++;
		this.addToken(TokenTypes.STRING,str)
	}
	addToken(type,val){
		this.start=this.current;
		this.tokens.push(new Token(type,val))
	}
	advance(){
		return this.source[this.current++]
	}
	ifMatchKeepMove(x){
		if(this.source[current] === x){
			current++;
			return true;
		}
		return false;
	}
	ifUnmatchKeepMove(x){
		if(this.source[this.current] !== x){
			this.current++;
			return true;
		}
		return false
	}
	isEnd(){
		if(this.current >= this.source.length){
			return true
		}
		return false
	}

}
class Token {
	constructor(type,val){
		this.val=val
		this.type=type
	}
}



// let code="\"abc\""
let code="12"
let s=new Scanner(code)
s.scanTokens()
console.log(s.tokens)