var titleBar = document.querySelector(".title");
var gamePanel = document.querySelector(".gamePanel");

var timerId = 0;

var c = [0, 255, 0];

window.onload = function () {
  colorSwitch();
  loadCount();
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor(onOff) {

  if (onOff) {
    timerId = setInterval(function () {
      c[0] += 5;
      c[1] -= 5;
      c[2] = getRandomInt(0, 255);

      if (c[0] > 254) {
        c[0] = 0;
        c[1] -= c[2] % getRandomInt(11, 111);
      }
      if (c[1] < 1) {
        c[1] = 255;
        c[0] += c[2] % getRandomInt(11, 111);
      }

      titleBar.style.background = "#" + c[0] + c[1] + c[2];
      //console.log(c[0], c[1], c[2]);

    }, 10);
  } else {
    clearInterval(timerId);
  }
}

function colorSwitch() {
  titleBar.addEventListener("click", function () {
    if (timerId != 0) {
      randomColor(false);
      timerId = 0;
      console.log("False", c);
    } else {
      console.log("True");
      randomColor(true);
    }
  });

  randomColor(true);
}

function loadCount() {

  var allElements = document.getElementsByTagName("*");

  Array.prototype.forEach.call(allElements, function (el) {

    console.log()

    var includePath = el.dataset.includePath;
    if (includePath) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          el.outerHTML = this.responseText;
        }
      };
      xhttp.open("GET", includePath, true);
      xhttp.send();
    }
  });

}
