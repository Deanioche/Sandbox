const scriptName = "getChat";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    let senderList = JSON.parse(DataBase.getDataBase("/chatlog/senderList.txt"));
    var existSender = senderList.filter(e => e.sender == sender);
    var data = {"room" : room, "sender" : sender, "msg" : msg, "date" : getDate()};
    
    // 첫 유저 리스트에 저장
    if(existSender.length == 0){
      
      DataBase.setDataBase("/chatlog/data_"+sender + ".txt", JSON.stringify(data));
      senderList.push({"id" : senderList.length, "sender" : sender, "room" : room, "chatcount" : 1, "beginActive" : getDate(), "lastActive" : getDate()});
      DataBase.setDataBase("/chatlog/senderList.txt", JSON.stringify(senderList));
    }

    update(sender, senderList); // lastActive 업데이트

    DataBase.appendDataBase("/chatlog/chatlog.txt", JSON.stringify(data) + ", "); 
    
    var textlog = "[room : " + room + "] (" + getDate() + ") : " + msg + "\n";
    
    DataBase.appendDataBase("/chatlog/data_"+sender + ".txt", textlog);
    
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

function update(sender, senderList){
senderList.filter(e => e.sender == sender)[0].lastActive = getDate();
senderList.filter(e => e.sender == sender)[0].chatcount += 1;
  DataBase.setDataBase("/chatlog/senderList.txt", JSON.stringify(senderList));
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