let compare_list = [];

$(document).ready(function () {

    // ######## 스타 토글 ########
    $.fn.starToggle = function (txt) {
        $(this).toggleClass('star-checked');
        console.log("className : \n" + txt.className);
        console.log("id :" + txt.id);
    };

    // ######## 비교 토글 체크박스 ########
    $.fn.checkToggle = function (info) {
        $(this).toggleClass('selected');

        if (info.className.includes("selected")) {

            if (!compare_list.includes(info.id)) {
                $.fn.addToCompareList(info.id);

            } else {
                console.log(info.id + ': unchecked');
                compare_list.pop(info.id);
            }

            console.log("# array : " + compare_list);
        };
    }
    // ######## 비교리스트에 유닛 추가 ########
    $.fn.addToCompareList = function (id) {
        compare_list.push(id);
        console.log("# \"" + id + "\" has been added to array : compare_list");

        var name = $("#" + id).parent().prop('tagName');
        console.log(name);

        $('.compare-container .content')
    }

    // ######## 리스트 카테고리 전환 효과 ########
    $('.btn-filter').on('click', function () {
        var $target = $(this).data('target');
        if ($target != 'all') {
            $('.table tr').css('display', 'none');
            $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
        } else {
            $('.table tr').css('display', 'none').fadeIn('slow');
        }
    });

    // 로컬스토리지 넣기 https://www.zerocho.com/category/HTML/post/5918515b1ed39f00182d3048
    $('.btn-compare').click(function () {
        $('.compare-container').toggleClass('active');

        // for(var i = 0; i < compare_list.length; i++) {
        //     console.log(compare_list[i]);   
        // }
    });


    // ######## 리스트에 항목 추가 펑션 ########
    var unitNum = 1;

    $('.btn-add').click(function () {

        var unit =
            "<tr data-status='pagado'>" +
            "<td>" +
            "<div class='ckbox'>" +
            "<input type='checkbox' id='checkbox" + unitNum + "' onclick='$(this).checkToggle(this)'>" +
            "<label for='checkbox" + unitNum + "'></label>" +
            "</div>" +
            "</td>" +
            "<td>" +
            "<a href='#' onclick='$(this).starToggle(this)' class='star' id='star" + unitNum + "'>" +
            "<i class='fas fa-star'></i>" +
            " </a>" +
            "</td>" +
            "<td>" +
            "<div class='media'>" +
            "<a href='#' class='pull-left'>" +
            "<img src='zzang.gif' class='media-photo'>" +
            "</a>" +
            "<div class='media-body'>" +
            "<span class='media-meta pull-right'>Febrero 13, 2016</span>" +
            "<h4 class='title'>" +
            "Lorem Impsum" +
            "<span class='pull-right pagado'>(검색결과)</span>" +
            "</h4>" +
            "<p class='summary'>Ut enim ad minim veniam, quis nostrud" +
            "exercitation...</p>" +
            "</div>" +
            "</div>" +
            "</td>" +
            "</tr>";

        unitNum++;

        $('.table tbody').append(unit);

    });



});