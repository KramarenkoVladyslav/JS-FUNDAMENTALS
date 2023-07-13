function checkEmail(email) {
	let pattern = /^\w+\.?\w+\@\w+\.\w+$/;
	let isValidEmail = pattern.test(email);
	console.log(Boolean(isValidEmail));
}

checkEmail('kramarenko.creator@gmail.com');
