// find template and compile it
var templateSource = document.getElementById('results-template').innerHTML;
var resultsPlaceholder = document.getElementById('results');
var template = Handlebars.compile(templateSource);
var lastFmUrl1 =  'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=';
var bandName = document.getElementById('query').value;
var lastFmUrl2 = '&api_key=3727d6680ea7c0950e38739913861eb7&format=json';
var fullUrl = lastFmUrl1 + bandName + lastFmUrl2;


var searchAlbums = function(query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'album'
        },
        success: function(response) {
            resultsPlaceholder.innerHTML = template(response);
        }
    });
};



var searchLastFM = function(fullUrl) {
  $.ajax({
    url: fullUrl,
    data:{
      q:query,
      type: 'artist'
    },
    success: function(result){
        $("#information").html(result);
    }});
}

/*
$("button").click(function(){
   $.ajax({url: "demo_test.txt", success: function(result){
       $("#div1").html(result);
   }});
});
*/

results.addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('information').innerHTML = searchLastFM(fullUrl);
}, false);

document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var object = document.getElementById('query').value;
    searchAlbums(object);
}, false);
