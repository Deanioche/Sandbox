const bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');

// express 설정
var app = express();
app.use(express.static(__dirname + '/'))

// # BodyParser - https://www.npmjs.com/package/body-parser
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// DB 연결
mongoose.connect('mongodb+srv://surimi:surimi@memo.r6o9e.mongodb.net/memoDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => {
    console.log("DB connected " + Date());
});

var Schema = mongoose.Schema;

var todo = new Schema({
    author: String,
    content: String,
    date: Date
});

var todoModel = mongoose.model('Todo', todo);

// index
app.get('/', (req, res) => {

    res.render('index', { title: 'index' });

})


// showList
app.get('/load', function (req, res, next) {
    todoModel.find({}, function (err, data) {
        res.json({ status: 'Done', data: data });
    });
});

// save
app.post('/create', function (req, res, next) {

    var todoi = new todoModel();

    todoi.author = req.body.author;
    todoi.content = req.body.content;
    todoi.date = Date();

    console.log(todoi)

    todoi.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            res.json({ status: "SUCCESS" });
        }
    });

});

app.listen(8080, () => {
    console.log('Connected 8080 port!');
})
