
const log = document.querySelector(".log");
const ans = document.querySelector(".answer");

window.onload = function () {

    let com = init();
    let cnt = 1;

    ans.addEventListener("keydown", function (e) {
        if (e.keyCode == 13 && !e.shiftKey) {
            e.preventDefault();
            log.textContent += `# ${cnt++}번째 시도 : ` + ans.value + "\n";
            if (vaild(ans.value))
                check(make_list(ans.value), com);
            ans.value = "";
            log.scrollTop = log.scrollHeight;
        }
    });
}

function init() {
    log.textContent += "숫자가 정해졌습니다.\n";
    return get_randnum();
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
        log.textContent += "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n";
    else if (s === 0 && b === 0)
        log.textContent += "Nothing\n\n";
    else {
        txt += s > 0 ? `${s}스트라이크` : "";
        txt += b > 0 ? ` ${b}볼` : "";
        log.textContent += txt + "\n\n";
    }
}

