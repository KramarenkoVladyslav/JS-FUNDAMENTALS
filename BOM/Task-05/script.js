const messageBlock = document.querySelector('.message-block');
const text = document.createElement('p');
const btn = document.getElementById('btn');

btn.addEventListener('mousedown', () => {
	text.textContent = 'I was pressed!';
	messageBlock.appendChild(text);
});

btn.addEventListener('mouseover', () => {
	text.textContent = 'Mouse on me!';
	messageBlock.appendChild(text);
});

btn.addEventListener('mouseleave', () => {
	text.textContent = 'Mouse is not on me!';
	messageBlock.appendChild(text);
});





