// MongoDB 연결
// 아이디별 Todo 내용 저장

var showPanel = document.querySelector('#showPanel')
var inputPanel = document.querySelector('.inputPanel')



function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

var load = () => {
    httpGetAsync('/load', (data) => {

        var data = JSON.parse(data)
        showPanel.innerHTML = "";

        data.data.forEach(e => {

            showPanel.innerHTML += `        
                <div id="${e._id}">
                    <span class='author' >${e.author}</span>
                    <span class='content' >${e.content}</span>
                    <span class='date' >${e.date}</span>
                </div>`

        });
    })
}

var nickname = null;

$(".content").keypress(function (e) {

    if ((e.keyCode || e.which) == 13) {

        if (nickname == null) {

            if ($('.content').val() != "") {
                nickname = $('.content').val()

                $(".inputPanel label").html($('.content').val());
                $(".inputPanel label").css('color', 'black')
                $(".inputPanel label").css('font-weight', 'bold')
                $('.content').val("")
            } else {
                $(".inputPanel label").css('color', 'red')
                $(".inputPanel label").css('font-weight', 'bold')
            }

        } else if (nickname != null) {
            var postdata = {
                'author': nickname,
                'content': $('.content').val()
            };
            nickname = null;

            $('.content').val("")
            $(".inputPanel label").html('Press \'Enter\' after input your name');
            $(".inputPanel label").css('font-weight', 'normal')

            $.post('/create', postdata, function () {
                load();
            });


        }
        e.preventDefault();
    }
})


load();