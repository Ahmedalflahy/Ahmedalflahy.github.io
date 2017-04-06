$(document).ready(function(){
	$.getJSON('skill.json',function(a){
		$.each(a.skills,function(i){
			$('h2').append("<li class='skill'>"+a.skills[i].name+" :- "+a.skills[i].description +"</li><br>")
		})
		
	})
})