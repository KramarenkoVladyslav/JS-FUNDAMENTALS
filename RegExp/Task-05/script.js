function checkEmail() {
	let pattern =
		/^[A-Za-z0-9]+([_-]?[A-Za-z0-9]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
	let isValidEmail = false;
	while (!isValidEmail) {
		let email = prompt('Please enter your email');
		if (pattern.test(email)) {
			isValidEmail = true;
			console.log('Email is correct!');
		} else {
			console.log('Email is not correct!');
		}
	}
}
checkEmail();



