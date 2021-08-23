let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scrollY) {
    document.querySelectorAll('p').forEach(el => {
        scrollableGradient(el, scrollY)
    })
}

function scrollableGradient(el, scrollY) {
    if (el.offsetTop <= scrollY + window.innerHeight) {
        //console.log(el.offsetTop,scrollY + window.innerHeight, (scrollY + window.innerHeight) - el.offsetTop);
        const magic = ((scrollY + window.innerHeight) - el.offsetTop) / 2;
        el.style.backgroundImage = `linear-gradient(160deg, rgb(235, 239, 255) -100%, rgb(157, 213, 249), rgb(125, 40, 225), rgb(29, 30, 212), rgba(0, 0, 0, 0) ${magic}%)`
    }
}

window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false;
        });

        ticking = true;
    }
});
