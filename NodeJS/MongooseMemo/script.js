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
            $("#memo").empty();

            data.reverse() // 오래된 글이 맨 위에 출력

            $(data).each(function (i) {  // DB로 부터 받은 메모리스트(data) 출력 foreach
                var id = this._id;

                var date = new Date(this.date).toLocaleTimeString('ko-KR', options);
                $("#memo").prepend("<div class='item'></div>");
                $("#memo .item:first").append("<div class='photo_thumb'></div>");
                $("#memo .item:first").append("<div class='author'><b>" + this.author + "</b> (" + date + ")&nbsp;&nbsp; <span class='text_button modify'>MODIFY</span> <span class='text_button del'>DELETE</span> <span class='index'>" + (i + 1) + "</span> </div>");
                $("#memo .item:first").append("<div class='contents " + id + "'>" + this.contents + "</div>");

                var cnt = 0;

                $("#memo .item:first .modify").click(function (evt) {  // modify 버튼이 눌러졌을 때
                    var contents = $("#memo ." + id).html();

                    console.log(contents)
                    if (cnt == 0) {
                        $("#memo ." + id).html("<textarea id='textarea_" + id + "' class='textarea_modify'>" + contents + "</textarea>");
                        cnt = 1;
                    }
                    $("#textarea_" + id).keypress(function (evt) {
                        if ((evt.keyCode || evt.which) == 13) {  // 키보드에서 엔터버튼이 눌러졌을 때
                            if (this.value != "") {
                                modify(this.value, id);
                                evt.preventDefault();
                            }
                        }
                    });
                });

                $("#memo .item:first .del").click(function (evt) {  // del 버튼이 눌러졌을 때
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

    write = function (contents) {

        var postdata = {
            'author': $('input[type = "author"]').val(),
            'contents': contents
        };
        $('input[type = "author"]').val("");
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
        write($(".memoForm textarea").val());
        $(".memoForm textarea").val("");
    });

    load();
});