// Task 1
function createArray(start, end){
	let array = [];
	for (let i = start; i <= end; ++i){
		array.push(i);
	}
	return array;
}

console.log(createArray(2, 5));

// Task 2
function printNumbers(a, b) {
	let output = '';
	for (let i = a; i <= b; i++) {
		for (let j = a; j <= i; j++) {
			output += i + ' ';
		}
	}
	console.log(output);
}

printNumbers(1, 5);

// // Task 3
function randArray(k){
	let arr = [];
	for (i = 0; i < k; i++){
		let randomValue = Math.floor(Math.random() * 500) + 1;
		arr.push(randomValue);
	}
	console.log(arr);
}

randArray(10);

// Task 4
function compact(arr) {
	const set = new Set(arr);
	return Array.from(set);
}
const arr = [5, 3, 4, 3, 3, 6, 10];
const resultArr = compact(arr);
console.log(resultArr);

//Task 5
function funcName(arr) {
	const numberArray = [];
	const stringArray = [];

	arr.forEach(element => {
		if (typeof element === 'number') {
			numberArray.push(element);
		} else if (typeof element === 'string') {
			stringArray.push(element);
		} else if (Array.isArray(element)) {
			element.forEach(innerElement => {
				if (typeof innerElement === 'number') {
					numberArray.push(innerElement);
				} else if (typeof innerElement === 'string') {
					stringArray.push(innerElement);
				}
			});
		}
	});

	return [numberArray, stringArray];
}

// Task 6
function calc(a, b, op) {
  let result;
  if (op === 1) {
    result = a - b;
  } else if (op === 2) {
    result = a * b;
  } else if (op === 3) {
    result = a / b;
  } else {
    result = a + b;
  }

  return result;
}
console.log(calc(15, 6, 3)); 

// Task 7
function findUnique(arr) {
	const uniqueSet = new Set(arr);
	return uniqueSet.size === arr.length;
}