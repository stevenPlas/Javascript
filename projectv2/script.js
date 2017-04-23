// find template and compile it
var templateSource = document.getElementById('results-template').innerHTML;
var resultsPlaceholder = document.getElementById('results');
var template = Handlebars.compile(templateSource);
var lastFmUrl1 = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=';
var lastFmUrl2 = '&api_key=3727d6680ea7c0950e38739913861eb7&format=json';

/*
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
*/
$(function() {
    var $info = $("#information");
    $.ajax({
        type: 'GET',
        url: 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&api_key=3727d6680ea7c0950e38739913861eb7&format=json&artist=metallica',
        success: function(data) {
            console.log('success', data);
            for (var i = 0; i < 10; i++) {
              $info.append("<li> Name: " + data.toptracks.track[i].name + "</li>");
            }
        }
    });
});

/*
document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var object = document.getElementById('query').value;
    searchAlbums(object);
    document.getElementById('information').innerHTML = searchLastFM(fullUrl);
}, false);
*/

/*
results.addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('information').innerHTML = searchLastFM(fullUrl);
}, false);

$.each(data.toptracks, function(counter, band) {
    $info.append('<li>name: ' + band.track.name + ' artist: ' + band.artist + '</li>');
    counter++;
});
*/
