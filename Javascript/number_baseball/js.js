const log = document.querySelector(".log");
const ans = document.querySelector(".answer");
let playing = false;
let cnt = 1;
let com = get_randnum();


window.onload = function () {

    ans.addEventListener("keydown", key_down);
    init();
}

function init() {
    playing = true;
    cnt = 1;
    com = get_randnum();
    log.textContent = "숫자가 정해졌습니다.\n";
    log.scrollTop = log.scrollHeight;
    ans.value = "";
}

function key_down(e) {
    if (!playing)
        init();
    else if (e.keyCode == 13 && !e.shiftKey) {
        e.preventDefault();
        log.textContent += `# ${cnt++}번째 시도 : ` + ans.value + "\n";
        if (vaild(ans.value))
            check(make_list(ans.value), com);
        ans.value = "";
        log.scrollTop = log.scrollHeight;
    }
}

function get_randnum() {
    let set = new Set();
    while (set.size != 3)
        set.add(parseInt(Math.random() * 9) + 1);

    let arr = [];
    for (i of set)
        arr.push(i);

    return (arr);
}

function make_list(n) {
    let arr = [];
    for (i of n)
        arr.push(+i);
    return (arr);
}

function vaild(l) {
    if (l.length != 3) {
        log.textContent += `아웃!! (${l.length}자리가 입력되었습니다.)\n\n`;
        return (0);
    }
    for (i of l)
        if (isNaN(+i)) {
            log.textContent += `아웃!! (${typeof i} 타입이 입력되었습니다.)\n\n`;
            return (0);
        }
    return (1);
}

function check(m, c) {
    let strike = 0;
    let ball = 0;
    for (i of m)
        for (j of c) {
            if (m.indexOf(i) == c.indexOf(j) && i == j)
                strike++;
            else if (i == j)
                ball++;
        }
    print_result(strike, ball);
}

function print_result(s, b) {
    let txt = "";
    if (s === 3)
        game_over();
    else if (s === 0 && b === 0)
        log.textContent += "Nothing\n\n";
    else {
        txt += s > 0 ? `${s}스트라이크` : "";
        txt += b > 0 ? ` ${b}볼` : "";
        log.textContent += txt + "\n\n";
    }
}

function game_over() {
    log.textContent += "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n";
    playing = false;
    log.textContent += "\n# 새 게임을 시작하려면 아무거나 입력하세요.\n\n";
}