$(document).ready(function() {
	var lista = $("<ul>");
	lista.appendTo("body");
					
	$("button").on("click", function(){
		var li = $("<li>");
		li.text($("input").val());
		li.appendTo(lista);	
	});
});