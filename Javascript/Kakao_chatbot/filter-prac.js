var json = [{ "key1" : "val1", "key2" : "val2"},{ "key1" : "surimi", "key2" : "2val2"},{ "key1" : "3val1", "key2" : "3val2"}];

//console.log(json);
//console.log(json[0]);
//console.log(JSON.stringify(json));

var sender = "surimi"

//console.log(json.filter(e => e.key1 == sender)[0].key2);

json.filter(e => e.key1 == sender)[0].key2 = "AngAng";

let j2 = json.filter(e => e.key1 == sender)[0].key2;

j2 = "Mario";

console.log(json);
console.log(j2);

//한번에 여러 값을 수정할때엔 인덱스 값을 구하는게 나음.
// 배열 하나를 출력하거나 값 하나를 수정할땐 filter가 편할듯.