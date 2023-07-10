const citiesList = {
	ger: ['Berlin', 'Hamburg', 'Munich'],
	usa: ['New York', 'Los Angeles', 'Chicago'],
	ukr: ['Lviv', 'Kyiv', 'Rivne'],
};

let countrySelect = document.getElementById('country');
let citiesSelect = document.getElementById('cities');
let selectedText = document.getElementById('selected');

function updateCities() {
	let selectedCountry = countrySelect.value;
	citiesSelect.innerHTML = '';

	let cities = citiesList[selectedCountry];

	 cities.forEach(function (city) {
			let option = document.createElement('option');
			option.text = city;
			citiesSelect.add(option);
		});
		selectedText.innerHTML =
		'Selected country: ' +
		countrySelect.options[countrySelect.selectedIndex].text +
		'<br>Selected city: ' +
		citiesSelect.options[citiesSelect.selectedIndex].text;
}
countrySelect.addEventListener('click', updateCities);






