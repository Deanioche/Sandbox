// 웹 서버
var express = require('express');
var app = express();

// socket.io
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// static 폴더 지정
app.use(express.static(__dirname + '/'));

// url('/) 호출시
app.get('/', (req, res) => {
    res.render('index');    // 클라이언트에게 index.html 전달
})

// 클라이언트로부터 연결이 들어오면 실행되는 이벤트
io.on('connection', (socket) => {

    // socket 변수에는 실행 시점에 연결한 상대와 연결된 소켓의 객체가 들어있다.
    console.log('connected : ' + socket.id)

    //io.emit으로 전체 클라이언트에게 접속자 수 전송
    io.emit('usercount', io.engine.clientsCount);

    // 클라이언트 접속 해제시 이벤트 발생
    socket.on("disconnect", () => {
        console.log("Connection Lost")
        io.emit('message', '누구 나감');
        io.emit('usercount', io.engine.clientsCount);
    });

    // 클라이언트 -> 서버 메세지 수신 이벤트
    socket.on('message', (msg) => {

        //msg에는 클라이언트에서 전송한 매개변수가 들어온다. 이러한 매개변수의 수에는 제한이 없다.
        console.log('Message received: ' + msg);

        // io.emit으로 연결된 모든 소켓들에 신호를 보낼 수 있다.
        io.emit('message', msg);
    });
});

server.listen(8080, function () {
    console.log('Listening on http://localhost:8080/');
});