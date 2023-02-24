module.exports = function check(str, bracketsConfig) {
	const openBrackets = ['(', '{', '[', '|', '1', '3', '5', '7', '8'];
	bracketsConfig = {
		[')']: '(',
		['}']: '{',
		[']']: '[',
		['|']: '|',
		['2']: '1',
		['4']: '3',
		['6']: '5',
		['7']: '7',
		['8']: '8',
	}

//let stack = [];
function isBracketsRight(str) {
	let stack = [];
	
	for (i = 0; i < str.length; i++) {
		let currentSymbol = str[i];
		
		if (openBrackets.includes(currentSymbol)) {
			stack.push(currentSymbol);
		} else {
			if (str.length === 0) {
				return false;
			}
			
			let topElement = stack[stack.length - 1];
			
			if (bracketsConfig[currentSymbol] === topElement) {
				stack.pop();
			} else {
				return false 
			}
		}
	}
    if (stack.length === 0) {return true}
    if (stack.length % 2 == 0) {return true}
	if (stack.length % 2 > 0) {return false}
}

return isBracketsRight(str)
}
