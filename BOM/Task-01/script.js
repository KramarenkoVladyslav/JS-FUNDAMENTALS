let windowWidth = 300;
let windowHeight = 300;
const newWindow = window.open('', '',`width=${windowWidth}, height=${windowHeight}`);


setTimeout(() => {
	windowWidth = 500;
	windowHeight = 500;
	newWindow.resizeTo(windowWidth, windowHeight);
}, 2000);

setTimeout(() => {
	const moveToX = 200;
	const moveToY = 200;
	newWindow.moveTo(moveToX, moveToY);
}, 4000);

setTimeout(() => {
	newWindow.close();
}, 6000);