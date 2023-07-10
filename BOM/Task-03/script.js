const block = document.querySelector('.block')
btn1.addEventListener('mousedown', () => block.style.backgroundColor = 'blue');
btn2.addEventListener('dblclick',() => block.style.backgroundColor = 'pink');

btn3.addEventListener('mousedown',  () => block.style.backgroundColor = 'brown');
btn3.addEventListener('mouseup',  () => block.style.backgroundColor = 'white');

btn3.addEventListener('mouseleave', function() {
  if (btn3) {
    block.style.backgroundColor = 'white';
  }
});

link.addEventListener('mouseover', () => block.style.backgroundColor = 'yellow')
link.addEventListener('mouseleave', () => block.style.backgroundColor = 'white')