// Task 1
function sumSliceArray(arr, first, second) {
	if (typeof first !== 'number' || typeof second !== 'number') {
		throw new Error('Arguments must be numbers');
	}

	if (first >= arr.length || second >= arr.length) {
		throw new Error('Invalid element sequence numbers');
	}
	return arr[first] + arr[second];
}

try {
	const arr = [1, 2, 3, 4, 5];
	const result = sumSliceArray(arr, 3, 5);
	console.log(result); 
} catch (error) {
	console.error('An error occurred', error.message);
}

// Task 2
function checkAge() {
	try {
		const name = prompt('Enter your name');
		if (!name) {
			throw new Error('The field is empty! Please enter your name');
		}

		const ageInput = prompt('Enter your age');
		if (!ageInput) {
			throw new Error('The field is empty! Please enter your age');
		}

		const age = parseInt(ageInput);
		if (isNaN(age)) {
			throw new TypeError('Age should be a number');
		}

		if (age < 18 || age > 70) {
			throw new RangeError('Age should be between 18 and 70');
		}

		const status = prompt('Enter your status (admin, moderator, user):');
		if (
			status !== 'admin' &&
			status !== 'moderator' &&
			status !== 'user'
		) {
			throw new EvalError('Invalid status entered');
		}

		alert('You have access to watch the movie!');
	} catch (error) {
		alert(`An error occurred: ${error.name} - ${error.message}`);
	}
}
checkAge();

// Task 3
function calcRectangleArea(width, height) {
	if (typeof width !== 'number' || typeof height !== 'number') {
		throw new TypeError('Width and height should be numbers');
	}
	return width * height;
}
try {
	const width = parseInt(prompt('Enter the width of the rectangle:'));
	const height = parseInt(prompt('Enter the height of the rectangle:'));

	const area = calcRectangleArea(width, height);
	console.log('Rectangle area:', area);
} catch (error) {
	console.error('An error occurred:', error.message);
}

// Task 4
class MonthException {
	constructor(message) {
		this.name = 'MonthException';
		this.message = message;
	}
}

function showMonthName(month) {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	if (month < 1 || month > 12) {
		throw new MonthException('Incorrect month number');
	}

	return months[month - 1];
}

try {
	console.log(showMonthName(5)); 
	console.log(showMonthName(14)); 
} catch (error) {
	if (error instanceof MonthException) {
		console.log(error.name, error.message);
	} else {
		console.error('An error occurred:', error.message);
	}
}

// Task 5
function showUser(id) {
  if (id < 0) {
    throw new Error('ID must not be negative');
  }

  return { id };
}

function showUsers(ids) {
  const users = [];

  for (const id of ids) {
    try {
      const user = showUser(id);
      users.push(user);
    } catch (error) {
      console.error(error.message);
    }
  }

  return users;
}
console.log(showUsers([7, 5, 3, 4]));
