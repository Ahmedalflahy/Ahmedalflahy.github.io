// var url='https://www.googleapis.com/youtube/v3/playlists?part=snippet&key=AIzaSyDYh2b125tU8IsCWUwuFVayxcs59k_i2ng&id=PLDoPjvoNmBAwXDFEEpc8TT6MFbDAC5XNB'

var url="https://www.googleapis.com/youtube/v3/search?part=snippet&q=One of the best jQuery course&key=AIzaSyDYh2b125tU8IsCWUwuFVayxcs59k_i2ng&maxResults=10"
$(document).ready(function(){

	$("#btn").click(function(){
		$.get(url,function(jsonResponse){
			addVideoToDOM(jsonResponse.items[0].id.videoId);
			console.log(jsonResponse.items)
			$.each(jsonResponse.items,function(i,v){
				var onclick="addVideoToDOM('"+v.id.videoId+"')";
				$('#others').append('<a href="#" onclick="'+onclick+'">'+v.snippet.title+'</a><br><br>')
				console.log(v.snippet.title)
			})
		})
	})})

// function for adding an iframe element to the DOM with the extracted video URL
// var playUrl='https://www.youtube.com/playlist?list=PLDoPjvoNmBAwXDFEEpc8TT6MFbDAC5XNB'
function addVideoToDOM(videoId) {
	$('#video').html(`<iframe
		width="560"
		height="315"
		src="https://www.youtube.com/embed/${videoId}"
		frameborder="0"
		allowfullscreen>
		</iframe>`
		);
}
//https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCh9hQ6K3jTCyBFk68WZtNoxob_3PW_kn4&maxResults=3&q="
//`https://www.googleapis.com/youtube/v3/search?part=snippet&q=html&key=AIzaSyDYh2b125tU8IsCWUwuFVayxcs59k_i2ng&maxResults=1`
//One of the best jQuery course
//`https://www.googleapis.com/youtube/v3/search?part=snippet&q=One of the best jQuery course&key=AIzaSyDYh2b125tU8IsCWUwuFVayxcs59k_i2ng&maxResults=10`
// $.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=One of the best jQuery course&key=AIzaSyDYh2b125tU8IsCWUwuFVayxcs59k_i2ng&maxResults=10,function(jsonResponse"){
	//	addVideoToDOM(jsonResponse.items[0].id.videoId);
//})