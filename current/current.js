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
		var dt = new Date (itm.created_at);
	$('#result').append('<div id="result1"><a href='+`${itm['html_url']}`+'>'+`${itm['name']}`+'</a> '+formatDate(dt)+'</div><br/><br>');
	});
}).fail(function(){alert("Error!")})
}
function formatDate(date) {

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}
