const bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');

// express 설정
var app = express();
app.use(express.static(__dirname + '/'))

// # BodyParser - https://www.npmjs.com/package/body-parser
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

function getCurrentDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var today = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();
    return new Date(Date.UTC(year, month, today, hours, minutes, seconds, milliseconds));
}

mongoose.connect('mongodb+srv://surimi:surimi@memo.r6o9e.mongodb.net/memoDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => {
    console.log("DB connected " + getCurrentDate());
});

var Schema = mongoose.Schema;

var Memo = new Schema({
    author: String,
    contents: String,
    date: Date
});

var memoModel = mongoose.model('memo', Memo);

memoModel.deleteMany({ contents: 'hangover' });

app.get('/', (req, res) => {
    res.render('index', { title: 'Express' });

})

// 메모 리스트 출력
app.get('/load', function (req, res, next) {
    memoModel.find({}, function (err, data) {
        res.json(data);
    });
});

// 메모 저장
app.post('/write', function (req, res, next) {

    var author = req.body.author;
    var contents = req.body.contents;
    var date = Date();

    var memo = new memoModel();

    memo.author = author;
    memo.contents = contents;
    memo.date = date;
    memo.comments = [];

    memo.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            res.json({ status: "SUCCESS" });
        }
    });

});

// 삭제
app.post('/del', function (req, res, next) {
    var _id = req.body._id;
    memoModel.deleteOne({ _id: _id }, function (err, result) {
        if (err) {
            throw err;
        }
        else {
            res.json({ status: "SUCCESS" });
        }
    });
});


// 수정
app.post('/modify', function (req, res, next) {
    var _id = req.body._id;
    var contents = req.body.contents;

    memoModel.findOne({ _id: _id }, function (err, memo) {
        if (err) {
            throw err;
        }
        else {
            memo.contents = contents;

            memo.save(function (err) {
                if (err) {
                    throw err;
                }
                else {
                    res.json({ status: "SUCCESS" });
                }
            });
        }
    });
});


app.listen(8080, () => {
    console.log('Connected 8080 port!');
})
