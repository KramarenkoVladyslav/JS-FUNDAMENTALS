const circles = document.querySelectorAll('.circle');

circles.forEach(function(circle){
	const animValue = circle.getAttribute('data-anim');
	circle.classList.add(animValue);
});

