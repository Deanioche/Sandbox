window.onload = function() {

var logText = document.querySelector(".log");
var comm = document.querySelector(".command");

comm.addEventListener("keydown", function (e) {
  if (e.keyCode == 13 && !e.shiftKey) {
    e.preventDefault();

    logText.innerText += comm.value + "\n";

    comm.scrollTop = comm.scrollHeight;

    console.log(comm.scrollTop)
    console.log(comm.scrollHeight)

    comm.value = "";
  }
});

var pInfo = {"name" : "surimi", "level" : 1, "exp" : 0}
var mob;

logText.innerText += pInfo.name + "\n";
logText.innerText += pInfo.level + "\n";
logText.innerText += pInfo.exp + "\n";

}

function response(
    room,
    msg,
    sender,
    isGroupChat,
    replier,
    imageDB,
    packageName
  ) {}