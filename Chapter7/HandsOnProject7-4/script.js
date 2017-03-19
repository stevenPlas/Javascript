/*
JavaScript 6th Edition
Chapter 7
Hands-on Project 7-4

Author: Steven Plas
Date:   3/17/17

Filename: script.js
*/
"use strict";

//Global Variables
var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");

//Proccessing the delivery information
function processDeliveryInfo() {
  var prop;

  delivSummary.innerHTML = "";
  delivInfo.name = document.getElementById("nameinput").value;
  delivInfo.addr = document.getElementById("addrinput").value;
  delivInfo.city = document.getElementById("cityinput").value;
  delivInfo.email = document.getElementById("emailinput").value;
  delivInfo.phone = document.getElementById("phoneinput").value;

  for (prop in delivInfo) {
    delivSummary.innerHTML += "<p>" + delivInfo[prop] + "<p>";
  }
}

function previewOrder() {
  processDeliveryInfo(); // calling the process delivery function
  document.getElementsByTagName('section')[0].style.display = 'block'; //displaying the order summery
  delivSummary.style.display = "block"; // displaying the delivery information
}

//Create the event listener function
function createEventListeners() {
  var previewButton = document.getElementById("previewBtn");
  if (previewButton.addEventListener) {
    previewButton.addEventListener("click", previewOrder, false);
  }else if (previewButton.attachEvent) {
    previewButton.attachEvent("onclick", previewOrder);
  }
}

if (window.addEventListener) {
  window.addEventListener("load", createEventListeners, false);
}else if (window.attachEvent) {
  window.attachEvent("onload", createEventListeners);
}
