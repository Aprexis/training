$(document).ready(function(){

	var wrapper = $('div.reveal-answer');
	var block = $('div.reveal-answer blockquote');

	block.hide(0);

	wrapper.click(function(){
		$(this).find(block).toggle(0);
	});

});