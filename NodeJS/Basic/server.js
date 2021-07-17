var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Jade 사용
app.set('view engine', 'jade');
app.set('views', __dirname + '/views'); // jade 파일을 저장할 폴더 경로
app.locals.pretty = true; // jade -> html 변환 후 prettier 적용 여부

// static 파일들 (html, css)을 불러올 폴더 지정
app.use(express.static(__dirname + '/static'))

// # BodyParser - https://www.npmjs.com/package/body-parser
// for parsing application/json
app.use(bodyParser.json())
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/form', (req, res) => {
    res.render('form');
})

// GET
app.get('/form_receiver', (req, res) => {
    var q = req.query; // get 방식 데이터 수신
    res.send(`${q.title}, ${q.description}`);
})

//POST
app.post('/form_receiver', (req, res) => {
    var q = req.body; // post 방식 데이터 수신
    res.send(`${q.title}, ${q.description}`);
})

app.get('/', (req, res) => {
    res.send(`<a href="/login">Hello!!!!</a>`);
});
app.get('/num', (req, res) => {
    res.send(`your num : ${req.query.넘버}`);
});
app.get('/num/:n/:n2', (req, res) => {
    res.send(`your num2 : ${req.params.n}, ${req.params.n2}`);
});
app.listen(8080, () => {
    console.log('Connected 8080 port!');
})

