const list = document.getElementById('list');
const listElements = list.getElementsByTagName('li');
const openModal = document.querySelector('.open-modal');

function showListItems() {
	let modalContent = '';
	 	modalContent += list.firstElementChild.textContent + ', ';
		modalContent += list.lastElementChild.textContent + ', ';
		modalContent += listElements[1].textContent + ', ';
		modalContent += listElements[3].textContent + ', ';
		modalContent += listElements[2].textContent;
	alert(modalContent);
};

openModal.addEventListener('click', showListItems);


