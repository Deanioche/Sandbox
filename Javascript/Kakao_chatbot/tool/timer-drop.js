var timerSwitch = false;

function timer(msg){
  msg = msg.replace("/타이머", "").trim();
  if(timerSwitch){ console.log("타이머가 이미 동작중입니다.");}
  else if(!msg.match(/^[0-9]*$/) || msg.length == 0){ console.log("/타이머 (초) 형식으로 입력해주세요");}
  else{timeCount(msg);}

}

function timeCount(sec) {
  timerSwitch = true;
  while (sec > 0) {
    //replier.reply("남은 시간 : " + sec);
    console.log("남은 시간 : " + sec );
    // java.lang.Thread.sleep(1000);
    sec--;
  }
  timerSwitch = false;
  console.log("타이머 끝");
}

timer("/타이머9");