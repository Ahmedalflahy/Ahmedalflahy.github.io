$(document).ready(function(){

$("#project").click(function(){
	ajaxGitRequest();
});
})
function ajaxGitRequest(){
	//debugger
	$("#result").html(' ')
	$.get('https://api.github.com/users/Ahmedalflahy/repos?sort=created&per_page=5',function(data){
	$.each(data,function(i,itm){
	$('#result').append('<div id="result1"><a href='+`${itm['html_url']}`+'>'+`${itm['name']}`+'</a>'+`${itm['created_at']}`+"</div><br/><br>");
	});
}).fail(function(){alert("Error!")})
}