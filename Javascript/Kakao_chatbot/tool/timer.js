/* ########################
  타이머 기능 실험
#########################*/

function response(
    room,
    msg,
    sender,
    isGroupChat,
    replier,
    ImageDB,
    packageName
  ) {
    if (msg.includes("타이머,")) {  
        var setTime = parseInt(msg.split(",")[1].trim());
  
        print(setTime + "분이 되면 알려드립니다.");
        timer_on(setTime);
  
    }
  
    if (msg.includes("타이머 정지")) {  
      
      
  }
  }
  
  function timer_on(setTime) {
  
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
  
      print(time);
      timerCount(setTime, day);
  
  
  }
  
  function timerCount(setTime, day){
  
    if(day.getMinutes() < setTime){
      var diff = setTime - day.getMinutes();
  
    }else if(day.getMinutes() > setTime){
      var diff = (60 - day.getMinutes()) + setTime;
  
    }else {
      diff = "0";
      print("지금!");
    }
  
    var timeleft = ((diff - 1) * 60) + Math.abs(60 - day.getSeconds()); // min -> sec
  
    print("타이머 : " + (diff - 1) + "분" + Math.abs(60 - day.getSeconds()) + "초 남음" );
  
    Utils.delay(timeleft * 1000);
  
    print("알람알람");
  
  }
  