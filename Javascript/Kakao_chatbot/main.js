// 가입시 닉네임 제한 숫자닉 등 불가
// 내 정보 출력시키기
// 가입시 기본 유저데이터 생성
// 유저 순위 표시



// [완료]
// filter 써보기 외부변수 -> 내부함수
// 회원 가입 안하면 명령어 사용 x

/***********************************************
               수정 전 백업할 것!!!!
*******************************************************/


const scriptName = "json";
let timerSwitch = false; // timer on/off
/**
 * (string) room
 * (string) sende
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 * 
 * *****************************************************
 *           수정 전 백업할 것!!!!
 * ******************************************************
 */

function response(
  room,
  msg,
  sender,
  isGroupChat,
  replier,
  imageDB,
  packageName
) {

  if(room != "surimi_bot"){ return; }
  else if (msg.match("/ㅎ")){ register(replier, sender, imageDB, isGroupChat); }
  else if(msg.startsWith("/")){
    let profileList = JSON.parse(DataBase.getDataBase("profileList.txt"));
    var data = profileList.filter(e => e.name == sender);
    if(data.length == 0){ replier.reply("회원가입을 먼저 해주세요\n명령어 : /ㅎ \n회원가입은 1:1채팅에서만 가능합니다.\nhttps://open.kakao.com/o/sDeNqs7c"); return; }

    update(sender, profileList);
    if (msg.match("/ㅂ")) { bot_status(replier); } 
    else if (msg.startsWith("/타이머")) { timer(msg, replier); } 
    //else if (msg.match("/ㅎ")){ register(replier, sender, imageDB, isGroupChat, profileList); }
    else if (msg.match("/ㅇㅈ")){ showUserList(replier, profileList); }
    else { replier.reply(sender + "님이 " + msg + "라고 보내셨습니다."); }
  }

}


//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
  var textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}
function onStart(activity) {}
function onResume(activity) {}
function onPause(activity) {}
function onStop(activity) {}


/* ########################
  메소드
#########################*/

function bot_status(replier) {
  var bt = Device.getBatteryLevel();
  var ch = Device.isCharging();
  replier.reply(
    "현재 봇 상태 \n 배터리 : " + bt + "%\n 충전중 : " + ch + "\n" + getDate());
  replier.reply(Utils.getPhoneBrand() + "\n" + Utils.getPhoneModel());
  DataBase.appendDataBase(
    "TimeLog.json",
    "현재 봇 상태 \n 배터리 : " + bt + "%\n 충전중 : " + ch + "\n" + getDate() + "\n" );
  DataBase.getDataBase("TimeLog.json");
  worked = true;
}

function timer(msg, replier) {
  msg = msg.replace("/타이머", "").trim();
  if (timerSwitch) {
    replier.reply("타이머가 이미 동작중입니다.");
  } else if (!msg.match(/^[0-9]*$/) || msg.length == 0) {
    replier.reply("/타이머 (초) 형식으로 입력해주세요");
  } else {
    timeCount(msg, replier);
  }
}

function timeCount(sec, replier) {
  timerSwitch = true;
  while (sec > 0) {
    replier.reply("남은 시간 : " + sec);
    java.lang.Thread.sleep(1000);
    sec--;
  }
  timerSwitch = false;
  replier.reply("타이머 끝");
}

function register(replier, sender, imageDB, isGroupChat, profileList) { // 이미 가입된 계정도 
  
  if(isGroupChat) replier.reply("회원가입은 1:1채팅에서 진행해주세요!\nhttps://open.kakao.com/o/sDeNqs7c");
  else{  
    let profileList = JSON.parse(DataBase.getDataBase("profileList.txt"));
    var data = profileList.filter(e => e.name == sender);
    
    if(data.length > 0){
      replier.reply("이미 존재하는 계정입니다.\n가입일 : " + data[0].registerDate);
    }
    else{
      replier.reply("계정명 : " + sender + "\n프로필 고유번호 : " + imageDB.getProfileBase64().substr(100,120)+ "\n로 프로필을 생성합니다.");
      var parsed = JSON.parse(DataBase.setDataBase(sender + "_profile.txt", JSON.stringify({"name" : sender, "idkey" : imageDB.getProfileBase64()})));
      replier.reply(parsed.name + "님 환영합니다!" );
   
      profileList.push({"id" : profileList.length, "name" : sender, "registerDate" : getDate(), "lastActive" : getDate()});
      DataBase.setDataBase("profileList.txt", JSON.stringify(profileList));
   }
  }
  
}
function showUserList(replier, profileList) {
  var txt = "[유저목록]\n";
  for(i in profileList ){ txt += i + ". " + profileList[i].name + " " + profileList[i].registerDate + "\n"; }
  replier.reply(txt);
}

function update(sender, profileList){
  profileList.filter(e => e.name == sender)[0].lastActive = getDate();
  DataBase.setDataBase("profileList.txt", JSON.stringify(profileList));
}

function getDate(){
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





