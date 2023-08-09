function calcArrProduct(arr){
	return new Promise((resolve, reject) => {
		if(arr.some(element => typeof element !== 'number')){
			reject('Error! Incorrect array!');
		} else {
			const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
			resolve(product);
		}
	}
)};


calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));
// "Error! Incorrect array!"




function dobutokVsihChisel(...numbers){
	return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1) 

}
console.log(dobutokVsihChisel(5, 5, 5))