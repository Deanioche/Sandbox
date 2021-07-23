var load = null;
var write = null;
var modify = null;
var del = null;

var options = {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timezone: 'short'
};

$(document).ready(function () {
    load = function () {
        $.get('/load', function (data) {
            $("#memo").empty(); // HTML의 데이터 출력될 부분을 초기화

            $(data).each(function (i) {  // DB로 부터 받은 메모리스트(data) foreach로 출력 

                // 데이터 각각의 고유 id 저장
                var id = this._id;

                // string으로 받은 시간을 Date 객체로 변환 + 한국시간
                var date = new Date(this.date).toLocaleTimeString('ko-KR');

                // 데이터 HTML 틀에 맞춰 출력
                $("#memo").prepend("<div class='item'></div>");
                $("#memo .item:first").append("<div class='photo_thumb'></div>");
                $("#memo .item:first").append(`
                        <div class='author'>
                            <b>${this.author}</b> (${date}) &nbsp; &nbsp; 
                            <span class='text_button modify'>MODIFY</span> 
                            <span class='text_button del'>DELETE</span> 
                            <span class='index'> ${(i + 1)} </span> 
                        </div>`);
                $("#memo .item:first").append("<div class='contents " + id + "'>" + this.contents + "</div>");

                // 위에 출력된 modify 버튼에 클릭리스너 지정
                var memo = this.contents;

                $("#memo .item:first .modify").click(function (evt) {  // modify 버튼이 눌러졌을 때

                    $("#memo ." + id).html("<textarea id='textarea_" + id + "' class='textarea_modify'>" + memo + "</textarea>");

                    // Enter 키 이벤트 지정
                    $("#textarea_" + id).keypress(function (evt) {
                        if ((evt.keyCode || evt.which) == 13) {
                            if (this.value != "") {
                                modify(this.value, id);
                                evt.preventDefault();
                            }
                        }
                    });
                });

                // 위에 출력된 del 버튼에 클릭리스너 지정
                $("#memo .item:first .del").click(function (evt) {
                    del(id);
                });
            });
        });
    };

    modify = function (contents, id) {
        var postdata = {
            'author': $('input[type = "author"]').val(),
            'contents': contents,
            '_id': id
        };
        $.post('/modify', postdata, function () {
            load();
        });
    };

    write = function () {

        if ($('input[type = "author"]').val() == "" || $(".memoForm textarea").val() == "") {
            return
        }

        var postdata = {
            'author': $('input[type = "author"]').val(),
            'contents': $(".memoForm textarea").val()
        };

        $('input[type = "author"]').val("");
        $(".memoForm textarea").val("");

        $.post('/write', postdata, function () {
            load();
        });
    };

    del = function (id) {
        var postdata = {
            '_id': id
        };

        $.post('/del', postdata, function () {
            load();
        });
    };

    $(".memoForm textarea").keypress(function (evt) {
        if ((evt.keyCode || evt.which) == 13) {  // 쓰기 영역에서 엔터 버튼을 눌렀을 때
            if (this.value != "") {
                write(this.value);
                evt.preventDefault();
                $(this).val("");
            }
        }
    });

    $("#write_button").click(function (evt) {  // 쓰기 버튼을 클릭했을 때
        write();
    });

    load();
});