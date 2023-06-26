// Task 1
const a = 1;
const b = 2;
const c = 3;
const isTrue = a < b && b < c;

// Task 2
let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = x < y;
console.log(res3);
console.log(typeof res3);

let res4 = x + y / 'g';
console.log(res4);
console.log(typeof res4);

// Task 3
isAdult = +prompt('Скільки вам років?');

if (isAdult >= 18) {
	alert('Ви досягли повнолітнього віку');
} else {
	alert('Ви ще надто молоді');
}

// Task 4
let side1 = parseFloat(prompt("Введіть довжину першої сторони трикутника"));
let side2 = parseFloat(prompt("Введіть довжину другої сторони трикутника"));
let side3 = parseFloat(prompt("Введіть довжину третьої сторони трикутника"));

let semiPerimetr = (side1 + side2 + side3) / 2;
let area = Math.sqrt(semiPerimetr * (semiPerimetr - side1) * (semiPerimetr - side2) * (semiPerimetr - side3));
if (isNaN(side1) || isNaN(side2) || isNaN(side3) || isNaN(area) || side1 <= 0 || side2 <= 0 || side3 <= 0){
	console.log('Incorrect data');
} else {
	console.log(`Площа трикутника: ${area.toFixed(3)}`);
}

if (
	side1 * side1 === side2 * side2 + side2 * side2 ||
	side2 * side2 === side1 * side1 + side3 * side3 ||
	side3 * side3 === side1 * side1 + side2 * side2
) {
	console.log("Цей трикутник є прямокутним");
} else {
	console.log("Цей трикутник не є прямокутним");
};

// Task 5
let currentTime = new Date();
let currentHour = currentTime.getHours();

if (currentHour >= 23 || currentHour < 5) {
	alert('Доброї ночі');
} else if (currentHour >= 5 && currentHour < 11) {
	alert('Доброго ранку');
} else if (currentHour >= 11 && currentHour < 17) {
	alert('Доброго дня');
} else {
	alert('Доброго вечора');
}

// Task 6
const arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let counter = {};
let maxCount = 0;
let mostFrequentNumber;

for (const num of arr) {
	counter[num] = (counter[num] || 0) + 1;

	if (counter[num] > maxCount) {
		maxCount = counter[num];
		mostFrequentNumber = num;
	}
}

console.log(`Масив чисел: [${arr}], число яке найбільш часто входить в масив - ${mostFrequentNumber}`);

