function checkUpperCase(text){
	let pattern = /^[A-Z]/;
	if (pattern.test(text)){
		console.log('Strings starts with uppercase character')
	} else {
		console.log("String's not starts with uppercase character");
	}
}

checkUpperCase('Vlad')