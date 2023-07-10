const heightInput = document.getElementById('height');
const widthInput = document.getElementById('width');

function showWindowSize(){
	heightInput.textContent = window.innerHeight;
	widthInput.textContent = window.innerWidth;
}
showWindowSize();
window.onload = showWindowSize;
window.onresize = showWindowSize;


