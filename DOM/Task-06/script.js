const colors = document.querySelectorAll('.color');
const priceOutput = document.getElementById('outprice');

colors.forEach(color => {
	color.addEventListener('click', () => {
		const price = parseFloat(color.getAttribute('data-price'));
		priceOutput.textContent = price.toFixed(2);
		const activeElement = document.querySelector('.color.active');
		activeElement.classList.remove('active');
		color.classList.add('active');
	});
});