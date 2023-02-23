module.exports = function check(str, bracketsConfig) {
  
function brackets() {
	const openBrackets = ['(', '{'];
	const bracketsPairs = {
		[')']: '(',
		['}']: '{',
	}

//let stack = [];
function isBracketsRight(string) {
	let stack = [];
	
	for (i = 0; i < string.length; i++) {
		let currentSymbol = string[i];
		
		if (openBrackets.includes(currentSymbol)) {
			stack.push(currentSymbol);
		} else {
			if (string.length === 0) {
				return false;
			}
			
			let topElement = stack[stack.length - 1];
			
			if (bracketsPairs[currentSymbol] === topElement) {
				stack.pop();
			} else {
				return false 
			}
		}
	}
	return stack.length === 0;
}

console.log(isBracketsRight('(())'));
	console.log(isBracketsRight('(()'));
		console.log(isBracketsRight('(({))'));
			console.log(isBracketsRight('{'));
}

brackets()

}
