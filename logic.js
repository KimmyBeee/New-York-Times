
$("#search").on("click", function(event){
	let topic = $("#search-bar").val();
	console.log(topic);

	event.preventDefault();

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3eea9854e78749d48eee727b93b5c103&q=" + topic;
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	});
});


