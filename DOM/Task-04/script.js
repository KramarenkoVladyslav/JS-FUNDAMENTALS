const btn = document.querySelector('.btn');
const outBlock = document.querySelector('.out');
const inputItems = document.querySelectorAll('.arr');

btn.addEventListener('click', showInfo);

function showInfo(event) {
	event.preventDefault();

	let outputInfo = '';
	for (let item of inputItems) {
		const itemName = item.getAttribute('data-form');
		const itemValue = item.value;
		outputInfo += `${itemName}: ${itemValue}<br>`;
	}
	outBlock.innerHTML = outputInfo;
}

