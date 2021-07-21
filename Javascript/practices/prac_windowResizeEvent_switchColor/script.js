// ⚠️ for Node.js ⚠️
// import "./styles.css";

window.onload = function() {
  console.log("123");
}


const body = document.querySelector("body");

const SMALL_CLASS = "small";
const MIDDLE_CLASS = "middle";
const BIG_CLASS = "big";

function resized() {
  if (body.offsetWidth < 400) {
    body.classList.add(SMALL_CLASS);
    body.classList.remove(MIDDLE_CLASS);
    body.classList.remove(BIG_CLASS);
    console.log("class added - blue");
  } else if (body.offsetWidth >= 400 && body.offsetWidth < 800) {
    body.classList.remove(SMALL_CLASS);
    body.classList.remove(BIG_CLASS);
    body.classList.add(MIDDLE_CLASS);
    console.log("class added - purple");
  } else if (body.offsetWidth >= 800) {
    body.classList.remove(SMALL_CLASS);
    body.classList.remove(MIDDLE_CLASS);
    body.classList.add(BIG_CLASS);
    console.log("class added - yellow");
  } else {
    body.classList.add(SMALL_CLASS);
  }
}

function initt() {
  window.addEventListener("resize", resized);
}

initt();

// 사이즈마다 색깔 바꾸기
//
