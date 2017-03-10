/*
JavaScript 6th Edition
Chapter 6
Hands-on Project 6-4

Author: Steven Plas
Date:   3/10/17

Filename: index.html
*/
"use strict"; // putting it in strict mode

//remove default value and formatting from the selection list
function removeSelectDefault() {
  var selectBox = document.getElementById("size");
  selectBox.selectedIndex = -1;
  selectBox.style.boxShadow = "none";
}

function setUpPage() {
  removeSelectDefault();
}

//remove fallback placeholder text
function zeroPlaceHolder() {
  var instrBox = document.getElementById("instructions");
  instrBox.style.color = "black";
  if (instrBox.value === instrBox.placeholder) {
    instrBox.value = "";
  }
}

//restore placeholder text if box contains no user entry
function checkPlaceholder() {
  var instrBox = document.getElementById("instructions");
  if (instrBox.value === "") {
    instrBox.style.color = "rgb(178,184,183)";
    instrBox.value = instrBox.placeholder;
  }
}

// add placeholder text for browsers that don't support placeholder attribute
function generatePlaceholder() {
  if(!Modernizr.input.placeholder) {
    var instrBox = document.getElementById("instructions");
    instrBox.value = instrBox.placeholder;
    instrBox.style.color = "rgb(178,184,183)";
    if (instrBox.addEventListener) {
      instrBox.addEventListener("focus", zeroPlaceHolder, false);
      instrBox.addEventListener("blur", checkPlaceholder, false);
    }else if (instrBox.attachEvent) {
      instrBox.attachEvent("onfocus", zeroPlaceHolder);
      instrBox.attachEvent("onblur", checkPlaceholder);
    }
  }
}

// set up the page on loading
function setUpPage() {
  removeSelectDefault();
  generatePlaceholder();
}

//run setup functions when tpage finishes loading
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
}else if (window.attachEvent) {
  window.attachEvent("onload", setUpPage);
}
