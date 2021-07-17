const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

// Jade
app.set('views', './views');
app.set('view engine', 'jade')
app.locals.pretty = true;

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// 두 url에 동일한 function이 실행되도록 배열로 묶는다.
app.get(['/index', '/index/:id'], (req, res) => {
    fs.readdir('./data', (err, files) => {
        if (err) {
            console.log(err)
            res.status(500).send('Internal Server Error');
        }

        var id = req.params.id;

        // id 값이 있을 때
        if (id) {
            fs.readFile(__dirname + '/data/' + id, 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                }

                res.render('index', { title: id, desc: data, topics: files })
            })
        } else {

            // id 값이 없을 때
            res.render('index', { topics: files, title: "Hello!", desc: null })
        }
    })
})

app.post('/index', (req, res) => {
    var b = req.body;
    // title을 파일 이름으로, desc를 내용으로
    fs.writeFile(__dirname + `/data/${b.title}`, b.desc, (err) => {
        if (err) {
            // send()가 실행되면 그 다음 코드는 실행되지 않으므로 
            // 아래 코드를 else로 감싸줄 필요가 없다!
            console.log(err)
            res.status(500).send('Internal Server Error');
        }
        res.redirect("/index/" + b.title)

    })
})

app.get('/new', (req, res) => {
    fs.readdir('./data', (err, files) => {
        if (err) {
            console.log(err)
            res.status(500).send('Internal Server Error');
        }
        res.render('new', { topics: files })
    })
})

app.listen(8080, () => {
    console.log('Connected port 8080')
})