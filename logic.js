
$("#search").on("click", function(){
	let topic = $("#search-bar").val();
	console.log(topic);

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3eea9854e78749d48eee727b93b5c103&q=" + topic;
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	});
});


