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
var delivInfo = {
  info:{
    name: "",
    addr: "",
    city: "",
    email: "",
    phone: ""
  }
};
var delivSummary = document.getElementById("deliverTo");

function processDeliveryInfo() {
  var prop;
  /*var name;
  var addr;
  var city;
  var email;
  var phone;

  name = "nameinput";
  addr = "addrinput";
  city = "cityinput";
  email = "emailinput";
  phone = "phhoneinput";*/

  delivInfo.info.name = document.getElementById("nameinput").value;
  delivInfo.info.addr = document.getElementById("addrinput").value;
  delivInfo.info.city = document.getElementById("cityinput").value;
  delivInfo.info.email = document.getElementById("emailinput").value;
  delivInfo.info.phone = document.getElementById("phoneinput").value;

  for (prop in delivInfo) {
    delivSummary.innerHTML += "<p>" + delivInfo[prop] + "<p>";
  }
}

function previewOrder() {
  processDeliveryInfo();
  document.getElementById("section").style.display = "block";
}

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
