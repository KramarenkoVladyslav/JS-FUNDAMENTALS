const bigHeader = document.querySelector('h1')
const myDiv = document.getElementById('myDiv');
const paragraph = document.querySelectorAll('p');
const myList = document.getElementById('myList');
const span = document.querySelector('span');

bigHeader.style.backgroundColor = 'green';
bigHeader.style.display = 'inline';

myDiv.firstElementChild.style.fontWeight = 'bold';
paragraph[1].style.color = 'red';
paragraph[2].style.textDecoration = 'underline';
paragraph[3].style.fontStyle = 'italic';

myList.style.display = 'flex';
myList.style.listStyleType = 'none';

span.style.display = 'none';