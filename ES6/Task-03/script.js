function mul(...args) {
	let result = 1;
	for (const arg of args){
		if (typeof arg === 'number') {
			result *= arg
		} else {
			return 0;
		}
		return result;
	}
}



console.log(mul(1, 'str', 2, 3, true)); // 6
console.log(mul(null, 'str', false, true)); // 0
