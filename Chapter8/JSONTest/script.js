/*
Discussion 8 JSON Objects

Author: Steven Plas
Date:   3/26/17

Filename: script.js
*/

//Global variables
var movies = "tron";
var url = "http://www.omdbapi.com/?t=";


//Best way I could figure out how to do this was by using ajax: https://www.sitepoint.com/ajaxjquery-getjson-simple-example/
function JSONFunction(url) {
  $.ajax({
  dataType: "json",
  url: url,
  async: false,
  success: function (data) {
    variable = data;
  }
});
return variable;
}

function page() {
  loadObject(JSONFunction(url + movies));
}

function loadObject(object) {
  document.getElementById("movieInformation").innerHTML = object.Title + "&nbsp;&nbsp;" + object.Year + "</br>" + '<img src="' + object.Poster + '"></img></br>';
}

function changeMovie(box) {
  if (box.checked) {
    loadObject(JSONFunction(url + document.getElementById("movie2").value));
  }else if (box.checked === false) {
    loadObject(JSONFunction(url + document.getElementById("movie1").value));
  }
}

if (window.addEventListener) {
  window.addEventListener("load", page, false);
}else if (window.attachEvent) {
  window.attachEvent("onload", page);
}
