
solution("try hello world");

function solution(s) {

    var answer = '';

    var ss = s.split(" ");

    ss.forEach(function (item, index, arr) {

        var word = '';
        for (var i = 0; i < item.length; i++) {
            var char = item.charAt(i);
            if (i == 0 || i % 2 == 0) {
                char = item.charAt(i).toUpperCase();
            }
            word += char;
        }
        answer += word + " ";

    })
    answer = answer.slice(0, -1);

    console.log(answer);
    return answer;
}