"use strict";

window.onload = function () {
  //console.log("ready!");
  getTime();
  updateTime();
  changeAlpha();
  blink();
  document.getElementById("search-logo-box").onclick = search;
};

function getTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  // let seconds = date.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  // if(seconds < 10){
  //   seconds = "0" + seconds;
  // }
  var time = hours + ":" + minutes;
  document.getElementById("time").innerText = time;
}

function updateTime() {
  setInterval(function () {
    getTime();
  }, 1000);
}

function search() {
  var val = document.getElementById("input-text").value;
  window.location.href = "https://www.baidu.com/s?wd=" + val;
}

function enter(event) {
  var e = window.event || arguments.callee.caller.arguments[0];
  if (e.which === 13) {
    search();
  }
}

function blink() {
  setInterval(function () {
    changeAlpha();
  }, 5000);
}

function changeAlpha() {
  var color = void 0;
  var timeColor = document.getElementById("time");

  var _loop = function _loop(i) {
    if (i <= 20) {
      setTimeout(function () {
        var j = i / 20;
        timeColor.style.color = "rgba(255, 255, 255, " + j + ")";
        timeColor.style.textShadow = "0px 0px " + i + "px rgba(255, 255, 255, " + j + ")";
      }, 200 * i);
    } else {
      setTimeout(function () {
        var j = (40 - i) / 20;
        timeColor.style.color = "rgba(255, 255, 255, " + j + ")";
        timeColor.style.textShadow = "0px 0px " + (40 - i) + "px rgba(255, 255, 255, " + j + ")";
      }, 200 * i + 1000);
    }
  };

  for (var i = 10; i < 30; i++) {
    _loop(i);
  }
}
