// find template and compile it
var templateSource = document.getElementById('results-template').innerHTML;
var resultsPlaceholder = document.getElementById('results');
var template = Handlebars.compile(templateSource);


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

var searchLastFM = function(query) {
  $.ajax({
    url: ' http://ws.audioscrobbler.com/2.0/',
    data:{
      q:query,
      type: 'Artist'
    },
    success: function (data) {
      variable = data;
    }
  });
  return variable;
}


results.addEventListener('click', function(e) {
    e.preventDefault();
    var object = document.getElementById('query').value;

    document.getElementById('information').innerHTML = searchLastFM(object.artist.getinfo);
}, false);

document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var object = document.getElementById('query').value;
    searchAlbums(object);
}, false);
