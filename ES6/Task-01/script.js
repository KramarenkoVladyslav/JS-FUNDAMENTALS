let names = {
	first: 'Tom',
	second: 'Sam',
	third: 'Ray',
	fourth: 'Bob',
};

let {
	first: f, second: x, third: t, fourth: b, fifth = 'Vlad'
} = names;

console.log(f); 
console.log(x); 
console.log(fifth); 
