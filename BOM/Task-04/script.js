btn.addEventListener('click', deleteListElements)

function deleteListElements(){
	const selectElement = document.getElementById('my-list');
	const selectedOptionIndex = selectElement.selectedIndex;

	if (selectedOptionIndex !== -1) {
		selectElement.remove(selectedOptionIndex);
	}
}