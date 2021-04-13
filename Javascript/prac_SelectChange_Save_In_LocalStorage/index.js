// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector("select");
const USER_LS = "country";

select.addEventListener("change", changeCountry);

function changeCountry(event) {
  const currentValue = select.value;
  console.log(currentValue);
  saveValue(currentValue);
}

function saveValue(text) {
  localStorage.setItem(USER_LS, text);
  console.log("LS에 저장된 값 : " + text);
}
