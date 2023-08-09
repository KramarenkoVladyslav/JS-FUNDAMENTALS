debugger;
new Promise(function (resolve, reject) {
   const userInput = prompt('Введіть число')
   const number = parseFloat(userInput);

   if(!isNaN(number)){
		resolve(number)
   } else {
		reject()
   }
}).catch(function (error) {
   return new Promise(function (resolve, reject) {
		const getInput = function () {
			const userInput = prompt('Введіть число');
			const number = parseFloat(userInput);

			if(!isNaN(number)){
				resolve(number)
			} else {
				getInput();
			}
		}
		getInput();
   });
}).then(function (result) {
   console.log(result)
});