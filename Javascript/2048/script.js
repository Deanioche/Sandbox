let board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
let tableID = Array.from(Array(4), (_, i) => [i + '0', i + "1", i + "2", i + '3'])
let score;



// 키보드 입력 처리
document.onkeydown = keyDownEventHandler;
function keyDownEventHandler(e){
    switch(e.keyCode){
        case 38: moveDir(0); break; //up
        case 40: moveDir(1); break; //down
        case 37: moveDir(2); break; //left
        case 39: moveDir(3); break; //right
    }
}

// 초기 설정 
init();

function init(){
    score = 0;
    // 모든 보드 0으로 초기화
    for(var i = 0; i < 4; i++)
        for(var j = 0; j < 4; j++)
            board[i][j] = 0;
    
    // 보드 2개에 숫자주기
    for(var i = 0; i < 2; i++){
        // var rand = parseInt(Math.random()*16); // 0 ~ 15
        // var y = parseInt(rand / 4); // 0 ~ 3
        // var x = rand % 4; // 0 ~ 3

        var y = parseInt(Math.random()*4)
        var x = parseInt(Math.random()*4)

        if(board[y][x]==0) board[y][x]=getNewNum();
        else i--;
    }
    update();
}

// 게임 화면 업데이트
function update(){
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            var cell = document.getElementById(tableID[i][j]);
            cell.innerHTML = board[i][j]==0?"":board[i][j];
            coloring(cell);
        }
    }
    document.getElementById("score").innerHTML = score;
}

// 칸 색칠
function coloring(cell){
    var cellNum = parseInt(cell.innerHTML);
    switch(cellNum){
        case 0:
        case 2:
            cell.style.color="#684A23";
            cell.style.background="#FBEDDC";
            break;
        case 4:
            cell.style.color="#684A23";
            cell.style.background="#F9E2C7";
            break;
        case 8:
            cell.style.color="#684A23";
            cell.style.background="#F6D5AB";
            break;
        case 16:
            cell.style.color="#684A23";
            cell.style.background="#F2C185";
            break;
        case 32:
            cell.style.color="#684A23";
            cell.style.background="#EFB46D";
            break;
        case 64:
            cell.style.color="#FFFFFF";
            cell.style.background="#EBA24A";
            break;
        case 128:
            cell.style.color="#FFFFFF";
            cell.style.background="#E78F24";
            break;
        case 256:
            cell.style.color="#FFFFFF";
            cell.style.background="#E87032";
            break;
        case 512:
            cell.style.color="#FFFFFF";
            cell.style.background="#E85532";
            break;
        case 1024:
            cell.style.color="#FFFFFF";
            cell.style.background="#E84532";
            break;
        case 2048:
            cell.style.color="#FFFFFF";
            cell.style.background="#E83232";
            break;
        default:
            if(cellNum>2048){
                cell.style.color="#FFFFFF";
                cell.style.background="#E51A1A";
            }
            else{
                cell.style.color="#684A23";
                cell.style.background="#FBEDDC";
            }
            break;
    }
}

// 보드판 이동 방향에 따른 회전 컨트롤
function moveDir(opt){
    switch(opt){
        case 0: move(); break; //up
        case 1: rotate(2); move(); rotate(2); break; //down
        case 2: rotate(1); move(); rotate(3); break; //left
        case 3: rotate(3); move(); rotate(1); break; //right
    }
    update();
}

// 보드판 회전
function rotate(n){
    while(n--){ // 1씩 감소
        var tempBoard = Array(Array(0,0,0,0),Array(0,0,0,0),Array(0,0,0,0),Array(0,0,0,0));
        for (var i = 0; i < 4; i++)
            for (var j = 0; j < 4; j++)
                tempBoard[i][j] = board[i][j];
        for (var i = 0; i < 4; i++)
            for (var j = 0; j < 4; j++)
                board[j][3 - i] = tempBoard[i][j];
    }
}

// 보드판 이동

// move() 함수가 실행되기 전, rotate() 함수로 이동할 방향이 up방향이 되도록 돌려놓아진다.
function move(){
    var isMoved = false;
    var isPlused = Array(Array(0,0,0,0),Array(0,0,0,0),Array(0,0,0,0),Array(0,0,0,0));
    for(var i = 1; i < 4; i++){ // 1, 2, 3
        for (var j = 0; j < 4; j++){ // 0, 1, 2, 3
            
            // i,j
            //(0,0 0,1 0,2 0,3)
            // 1,0 1,1 1,2 1,3
            // 2,0 2,1 '2,2' 2,3 
            // 3,0 3,1 3,2 '3,3'
            
            if (board[i][j] == 0) continue; // 0, 즉 빈칸이면 for문 스킵
            
            var tempY = i - 1; // 1, 2

            while (tempY > 0 && board[tempY][j] == 0) tempY--;
            // 블럭이 맨 끝이 아니고 (tempY > 0)
            // 현재 선택된 블럭의 한칸 위(board[tempY][j])가 0이면 또 그 위 블럭을 선택 (1, 2 -> 0, 2)
            
            if(board[tempY][j] == 0){ // 원래 블럭 위로 0이 하나라도 있으면
                board[tempY][j] = board[i][j]; // 원래 블럭을 0 블럭중 최상위 블럭으로 이동
                board[i][j] = 0; // 원래 있던 블럭은 0
                isMoved = true; 
                
            }
            else if (board[tempY][j] != board[i][j]) { // 위에 0이 없고 윗블럭이 같은 숫자가 아니면
                
                if (tempY + 1 == i) continue; // 위로 한칸도 움직이지 않았으면 스킵
                
                board[tempY + 1][j] = board[i][j]; // 현재 위치에 원래 블럭을 복사
                board[i][j] = 0; // 원래 블럭 0으로
                isMoved = true; 
            }
            
            else { // 둘다 아니면, (원래 블럭과 바로 위 블럭이 같으면)
                if (isPlused[tempY][j] == 0) { // isPlused 보드의 해당 위치가 0이면
                    board[tempY][j] *= 2; // 바로 위 블럭 2배
                    score += board[tempY][j]; // 블럭 숫자만큼 점수 추가
                    board[i][j] = 0; // 원래블럭 0
                    isPlused[tempY][j] = 1; // isPlused 보드의 해당 위치 1로
                    isMoved = true;
                }
                else{ // isPlused 보드의 해당 위치가 1이면
                    board[tempY + 1][j] = board[i][j]; // 바로 위 블럭으로 복사하고
                    board[i][j] = 0; // 원래 블럭 0으로
                    isMoved = true;
                }
            }
        }
    }
    if(isMoved) generate();
    else checkGameOver();
}

// 신규 숫자 생성
function generate(){
    var zeroNum = 0;
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++)
            if (board[i][j] == 0)
                zeroNum++; // 0 블럭 개수 세기
    while(true){
        for (var i = 0; i < 4; i++){
            for (var j = 0; j < 4; j++){
                if (board[i][j] == 0) {
                    var rand = parseInt(Math.random() * zeroNum); // 0 ~ (0 블럭 갯수 - 1) 중 랜덤 수
                    if (rand == 0) {
                        board[i][j] = getNewNum();
                        return;
                    }
                }
            }
        }
    }
}

// 숫자 생성 확률
function getNewNum(){
    var rand = parseInt(Math.random() * 10); // 0 ~ 9
    if (rand == 0) return 4; // 1/10확률로 4 리턴
    return 2;
}

// 최대 점수 반환
function getMaxNum(){
    var ret = 0;
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++)
            if (board[i][j] > ret)
                ret = board[i][j]; // 16개 블럭 중 가장 높은 수 리턴
    return ret;
}

// 게임오버 체크
function checkGameOver(){
    for (var i = 0; i < 4; i++){ // 가로줄 
        var colCheck = board[i][0]; // [i, 0] 블럭 숫자 저장
        if (colCheck == 0) return; // 하나라도 0이 있으면 게임오버 아님
        for (var j = 1; j < 4; j++){ // [i, (1 ~ 3)] 비교
            if (board[i][j] == colCheck || board[i][j] == 0) return;
            // 가로줄 i의 첫번째 블럭과 바로 아래 블럭과 비교
            else colCheck = board[i][j];
            // colCheck에 바로 아래 블럭 숫자를 저장 후 다음 for j

            //   i
            // j 2 
            // j 4 
            // j 2 
            // j 4 일때,

            // 비교
            // colcheck = 2, board[0][1] = 4 
            // colcheck = 4, board[0][2] = 1 
            // colcheck = 2, board[0][3] = 4 
            
        }
    }
    for (var i = 0; i < 4; i++){
        var rowCheck = board[0][i]; // 세로줄 체크
        if (rowCheck == 0) return; // 0있으면 게임오버 아님
        for (var j = 1; j < 4; j++){
            if (board[j][i] == rowCheck || board[j][i] == 0) return;
            else rowCheck = board[j][i];

            //   i i i i 
            // j 2 4 2 4 일때,

            // 비교
            // colcheck = 2, board[1][0] = 4
            // colcheck = 4, board[2][0] = 1 
            // colcheck = 2, board[3][0] = 4 
        }
    }
    // 위 조건을 모두 통과하면 (return 되지 않으면)
    gameover(); // 게임오버
}

// 게임오버 처리
function gameover(){
    alert("[Game Over]\nMax: " + getMaxNum() + "\nScore" + score);
    init();
}