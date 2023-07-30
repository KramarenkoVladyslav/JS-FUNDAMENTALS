$('h3').each(function(){
	let nextDiv = $(this).next('div');
	$(this).before(nextDiv);
});