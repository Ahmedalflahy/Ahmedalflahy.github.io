$(document).ready(function(){

$("#project").click(ajaxGitRequest)
})
function ajaxGitRequest(e){
	//debugger
	$("#result").html(' ')
	$.get(`https://api.github.com/users/Ahmedalflahy/repos?sort=created&per_page=5`,function(data){
	$.each(data,function(i,itm){
	$('#result').append(`<a href='${itm['html_url']}'>${itm['name']}</a><br/>${itm['created_at']}`);
	});
}).fail(function(){alert("Error!")})
}