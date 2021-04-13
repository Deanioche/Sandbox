/* ########################
  안씀
#########################*/

var msg = "타이머5";

let timerSwitch = false;

let timerSwitch = false;

function response(
  room,
  msg,
  sender,
  isGroupChat,
  replier,
  ImageDB,
  packageName
) {
  let worked = false;

  if (msg.includes("ㅂ") && !worked) {
    var bt = Device.getBatteryLevel();
    var ch = Device.isCharging();

    replier.reply("현재 봇 상태 \n 배터리 : " + bt + "%\n 충전중 : " + ch);
    worked = true;
  }

  if (msg.startsWith("타이머") && !timerSwitch && !worked) {
    msg = msg.replace("타이머", "").trim();
    worked = true;
    if (msg.match(/^[0-9]*$/)) {
      timer(msg);
    } else {
      replier.reply("타이머(숫자) 형식으로 다시 보내주세요");
    }
  } else if (msg.startsWith("타이머") && timerSwitch) {
    replier.reply("타이머가 이미 동작중입니다.");
    worked = true;
  }

  function timer(sec) {
    timerSwitch = true;

    while (sec > 0) {
      replier.reply("남은 시간 : " + sec);
      Utils.sleep(1000);
      sec--;
    }

    timerSwitch = false;
    replier.reply("타이머 끝");
  }
  if (!worked) {
    replier.reply(sender + "님이 " + msg + "라고 보내셨습니다.");
  }
  w;
}

// function response(
//   room,
//   msg,
//   sender,
//   isGroupChat,
//   replier,
//   ImageDB,
//   packageName
// ) {}

// function timer_on(setTime) {
//   var day = new Date();
//   var time =
//     day.getFullYear() +
//     "/" +
//     (day.getMonth() + 1) +
//     "/" +
//     day.getDate() +
//     " " +
//     day.getHours() +
//     ":" +
//     day.getMinutes() +
//     ":" +
//     day.getSeconds();

//   print(time);
//   timerCount(setTime, day);
// }

// function timerCount(setTime, day) {
//   if (day.getMinutes() < setTime) {
//     var diff = setTime - day.getMinutes();
//   } else if (day.getMinutes() > setTime) {
//     var diff = 60 - day.getMinutes() + setTime;
//   } else {
//     diff = "0";
//     print("지금!");
//   }

//   var timeleft = (diff - 1) * 60 + Math.abs(60 - day.getSeconds()); // min -> sec

//   print(
//     "타이머 : " +
//       (diff - 1) +
//       "분" +
//       Math.abs(60 - day.getSeconds()) +
//       "초 남음"
//   );

//   Utils.delay(timeleft * 1000);

//   print("알람알람");
// }
