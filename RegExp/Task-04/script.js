function checkValidationCard(){
	let patternCheckCard = /^\s*\d{4}-\d{4}-\d{4}-\d{4}\s*$/;
	let cardNumber = prompt(
		'Please enter your bank card number in the format 9999-9999-9999-9999:"'
	);

	if (patternCheckCard.test(cardNumber)) {
		console.log('The bank card is entered correctly');
	} else {
		console.log('The bank card is entered incorrectly');
	}
}
checkValidationCard();
