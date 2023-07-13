function checkLogin(login) {
	let pattern = /^[A-Za-z][A-Za-z0-9.]{1,9}$/;
	let numbers = login.match(/[0-9]+(\.[0-9]+)?/g);

	if (pattern.test(login)) {
		console.log('Numbers:', numbers);
		return true;
	} else {
		console.log('Numbers not found.');
		return false;
	}
}

console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee1*1ret3'));
