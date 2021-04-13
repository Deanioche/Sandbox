// import "./styles.css";

const form = document.querySelector("form");
const h2 = form.querySelector("h2");

function init() {
  setInterval(getTime, 100); // 1000ms = 1s
  // getTime();
}
init();

function getTime() {

  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  // console.log("크리스마스 : " + xmasDay);
  // console.log("크리스마스 : " + Date.parse(xmasDay));
  const now = new Date();
  // console.log("현재시간 : " + now);
  // console.log("현재시간 : " + Date.parse(now));
  const estimateTime = Date.parse(xmasDay) - Date.parse(now);
  // console.log("남은시간 : " + estimateTime);
  h2.innerText = calms(estimateTime);
}

function calms(cal) {
  var ms = cal;
  var s = ms / 1000;
  var m = s / 60;
  var h = m / 60;
  var d = h / 24;

  var date = Math.floor(d);
  var hour = Math.floor(h % 24);
  var min = Math.floor(m % 60);
  var sec = s % 60;

  // console.log("d : " + Math.floor(d));
  // console.log("h : " + Math.floor(h % 24));
  // console.log("m : " + Math.floor(m % 60));
  // console.log("s : " + (s % 60));

  return (
    (date < 10 ? "0" + date : date) +
    "d " +
    (hour < 10 ? "0" + hour : hour) +
    "h " +
    (min < 10 ? "0" + min : min) +
    "m " +
    (sec < 10 ? "0" + sec : sec) +
    "s "
  );
}
