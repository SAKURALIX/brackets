module.exports = function check(str, bracketsConfig) {
	const openBrackets = ['(', '{', '[', '1', '3', '5'];

	bracketsConfig = {
		[')']: '(',
		['}']: '{',
		[']']: '[',
		['2']: '1',
		['4']: '3',
		['6']: '5',
	}

function isBracketsRight(str) {
	let stack = [];
    let stack2 = [];
	
	for (i = 0; i < str.length; i++) {
		let currentSymbol = str[i];

        if (currentSymbol === '|' || currentSymbol === '7' || currentSymbol === '8') {
            stack2.push(currentSymbol);
        }
        
        if (openBrackets.includes(currentSymbol)) {
            
			stack.push(currentSymbol);

		}
        
        if (currentSymbol != '|' && currentSymbol != '7' &&currentSymbol != '8' && openBrackets.includes(currentSymbol) === false) {
			
			let topElement = stack[stack.length - 1];
			
			if (bracketsConfig[currentSymbol] === topElement) {
				stack.pop();
			} else if (bracketsConfig[currentSymbol] != topElement) {
				return false 
			}
		}
	}
    return stack.length === 0 && stack2.length % 2 == 0;
}

return isBracketsRight(str)
}
