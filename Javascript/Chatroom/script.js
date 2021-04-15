// 채팅로그를 기록하는 json 전체 데이터
let jsonData = [];
var log = ""

// init()
function init() {
  var textbox1 = document.querySelector(".chat_box1 textarea");
  var textbox2 = document.querySelector(".chat_box2 textarea");

  //Enter 키 이벤트
  textbox1.addEventListener("keydown", function (e) {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();
      const msg = textbox1.value;
      const sender = $(".chat_box1 .nickname-box input[type=text]").val();

      sendMessasge1(msg, sender); // 메세지, 보낸사람, 채팅박스 번호
      //입력창 초기화
      textbox1.value = "";
    }
  });

  $(textbox2).keydown(function (e) {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();

      // 공백전송 방지
      //   if (textbox2.value.trim() != "") {
      //     return;
      //   }

      const msg = textbox2.value;
      const sender = $(".chat_box2 .nickname-box input[type=text]").val();

      sendMessasge2(msg, sender);

      //입력창 초기화
      textbox2.value = "";
    }
  });
}

// 1번이 보냄
function sendMessasge1(msg, sender) {
  // 보낸 채팅을 html틀에 맞춰줌
  const chat = createMessageTag(msg, sender, "right");

  // 내가 보낸 메세지 내 채팅창에 출력
  $(".chat_box1 .chat_log").append(chat);

  //스크롤 내림
  scrollchatbox(1);

  // 데이터로 형식변환
  const data = {
    sender: sender,
    msg: msg,
    time: getTime(),
  };

  // 로그 기록
  appendToJSON(data);

  // 데이터 전송
  receiveData1(data);
}

// 2번이 보냄
function sendMessasge2(msg, sender) {
  const chat = createMessageTag(msg, sender, "right");

  $(".chat_box2 .chat_log").append(chat);

  scrollchatbox(2);

  const data = {
    sender: sender,
    msg: msg,
    time: getTime(),
  };

  // 로그 기록
  appendToJSON(data);

  // 데이터 전송
  receiveData2(data);
}

// 2번 데이터 수신
function receiveData1(data) {
  const chat = createMessageTag(data.msg, data.sender, "left");
  $(".chat_box2 .chat_log").append(chat);
  scrollchatbox(2);
  //console.log(data.time);
}

// 1번 데이터 수신
function receiveData2(data) {
  const chat = createMessageTag(data.msg, data.sender, "left");

  $(".chat_box1 .chat_log").append(chat);
  scrollchatbox(1);
  //console.log(data.time);
}

// 메세지 틀짜기
function createMessageTag(msg, sender, setLR) {
  // ul(제일 마지막 객체)은 포함되지 않음.
  let chatLi = $("div.chat.format ul").clone();

  chatLi.find("li").addClass(setLR);
  chatLi.find(".sender span").text(sender);
  chatLi.find(".message span").text(msg);

  return chatLi;
}

// 스크롤 기능
function scrollchatbox(num) {
  $(".chat_box" + num + " .chat_log").scrollTop(
    $(".chat_box" + num + " .chat_log").prop("scrollHeight")
  );

  var log = document.querySelector(".chat_box" + num);
  log.scrollTop = log.scrollHeight;

}

function getTime() {
  var day = new Date();
  var time =
    day.getFullYear() +
    "/" +
    (day.getMonth() + 1) +
    "/" +
    day.getDate() +
    " " +
    day.getHours() +
    ":" +
    day.getMinutes() +
    ":" +
    day.getSeconds();

  return time;
}

init();

// 로그 기록
function appendToJSON(data) {
  // 채팅기록을 전체 데이터에 추가
  jsonData.push("[ " + data.sender + " ] (" + data.time + ") : " + data.msg);

  log += jsonData[jsonData.length - 1] + "\n";

  $(".showJson").text(log);

  var logPanel = document.querySelector(".showJson");
  logPanel.scrollTop = logPanel.scrollHeight;
}

/// JSON 버튼 동작
var json_content = document.querySelector(".showJson");
document.querySelector(".show_hide").addEventListener("click", function (e) {
  e.preventDefault();

  if (json_content.classList.contains("hidden")) {
    json_content.style.opacity = "1";
  } else {
    json_content.style.opacity = "0";
  }
  json_content.classList.toggle("hidden");

});
