$(document).ready(function () {

    
$.fn.starToggle = function(){

    $(this).toggleClass('star-checked');
    
};

    $('.ckbox label').on('click', function () {
        $(this).parents('tr').toggleClass('selected');
        console.log('checkbox');
    });

    $('.btn-filter').on('click', function () {
        var $target = $(this).data('target');
        if ($target != 'all') {
            $('.table tr').css('display', 'none');
            $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
        } else {
            $('.table tr').css('display', 'none').fadeIn('slow');
        }
    });

    var unitNum = 1;

    $('.btn-add').click(function () {

        var unit =
            "<tr data-status='pagado'>" +
            "<td>" +
            "<div class='ckbox'>" +
            "<input type='checkbox' id='checkbox" + unitNum + "'>" +
            "<label for='checkbox" + unitNum + "'></label>" +
            "</div>" +
            "</td>" +
            "<td>" +
            "<a href='#' onclick='$(this).starToggle()' class='star star-checked' id='star" + unitNum + "'>" +
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




// function star() {
//     starToggleTrg();
//     console.log('123');
// }

// $('.star').on('click', function (event) {
//     console.log('star');
//     $(this).toggleClass('star-checked');
//     // event.target.toggleClass('star-checked');
// });