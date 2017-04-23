$('#search-form').submit(function(e) {
    e.preventDefault();
    var url = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&api_key=3727d6680ea7c0950e38739913861eb7&format=json&artist=' + $('#query').val();
    var $info = $("#information");

    $('#information').empty();
    $.ajax({
        type: 'GET',
        url: url,
        success: function(data) {
            for (var i = 0; i < 10; i++) {
                $info.append("<li><span class='bld'>Song:</span> " + data.toptracks.track[i].name + "<br> &nbsp;&nbsp;&nbsp;&nbsp;" +
                    "<span class='bld'>Total Plays:</span> " + data.toptracks.track[i].playcount + "</li> <br>");
            }

        }
    });
});