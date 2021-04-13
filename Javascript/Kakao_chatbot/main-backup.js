// 가입시 닉네임 제한 숫자닉 등 불가
// filter 써보기 외부변수 -> 내부함수
// 내 정보 출력시키기
// 가입시 기본 유저데이터 생성
// 유저 순위 표시



const scriptName = "json";
let timerSwitch = false; // timer on/off
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
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

  if(room != "surimi_bot"){
    return;
  }
  
  update(sender, replier);

  // bot status
  if (msg.match("/ㅂ")) { bot_status(replier); } 
  else if (msg.startsWith("/타이머")) { timer(msg, replier); } 
  else if (msg.match("/ㅎ")){ register(replier, sender, imageDB, isGroupChat); }
  else if (msg.match("/ㅇㅈ")){ showUserList(replier); }
  else { replier.reply(sender + "님이 " + msg + "라고 보내셨습니다."); }
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

function register(replier, sender, imageDB, isGroupChat) { // 이미 가입된 계정도 
  
  if(isGroupChat) replier.reply("회원가입은 1:1채팅에서 진행해주세요!\nhttps://open.kakao.com/o/sDeNqs7c");
  else{  
    
    var profileList = JSON.parse(DataBase.getDataBase("profileList.txt"));
    // 실험 필요 profileList.filter( function(e, sender){ return e.name == sender; })
    
    let indexNum = -1;
    
    for(index in profileList){
      if(profileList[index].name == sender){
        indexNum = index;
      }
    }
    
    if(indexNum != -1){
      replier.reply("이미 존재하는 계정입니다.\n가입일 : " + profileList[indexNum].registerDate);
    }
    else{
      replier.reply("계정명 : " + sender + "\n프로필 고유번호 : " + imageDB.getProfileBase64().substr(100,120)+ "\n로 프로필을 생성합니다.");
      var parsed = JSON.parse(DataBase.setDataBase(sender + "_profile.txt", JSON.stringify({"name" : sender, "idkey" : imageDB.getProfileBase64()})));
      replier.reply(parsed.name + "님 환영합니다!" );
   
      var profileList = JSON.parse(DataBase.getDataBase("profileList.txt"));
      profileList.push({"id" : profileList.length, "name" : sender, "registerDate" : getDate(), "lastActive" : getDate()});
      DataBase.setDataBase("profileList.txt", JSON.stringify(profileList));

   }
  }
  
}
function showUserList(replier) {
  var txt = "[유저목록]\n";
  var db = JSON.parse(DataBase.getDataBase("profileList.txt"));
  for(i in db ){
    txt += i + ". " + db[i].name + " " + db[i].registerDate + "\n";
  }
  replier.reply(txt);
}

function update(sender, replier){
  var db = JSON.parse(DataBase.getDataBase("profileList.txt"));
  
  for(index in db){
    if(db[index].name.includes("surimi"))
{
      db[index].name = "surimi";
      db[index].lastActive = getDate();
    }
  }
  
  replier.reply(JSON.stringify(db));
  DataBase.setDataBase("profileList.txt", JSON.stringify(db));
  
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





