console.log("Vladyslav");

let firstName = "Vlad";
let lastName = "Kramarenko";
let studyGroup = "June";
const birthOfYear = 2002;
const isMarried = false;

console.log(typeof birthOfYear, birthOfYear);
console.log(typeof isMarried, isMarried);
console.log(typeof firstName, firstName);

let nallVariable = null;
let undefinedVariable;

console.log(typeof nallVariable, nallVariable);
console.log(typeof undefinedVariable, undefinedVariable);

let login = prompt('Please enter your login:');
let email = prompt('Please enter your email:');
let password = prompt('Please enter your password:');

let message = `Dear User, your email is ${email}, your password is ${password}`;
alert(message);

let secondsInHour = 60 * 60;
let secondsInDay = secondsInHour * 24;
let secondsInMonth = secondsInDay * 30;

console.log("Кількість секунд в годині: ", secondsInHour);
console.log("Кількість секунд в добі: ", secondsInDay);
console.log("Кількість секунд в місяці: ", secondsInMonth);