// init
var bullet = document.querySelector('.bullet');
var bulletStat = window.getComputedStyle(bullet,null);
var shot = document.querySelector('.shot');
var power = document.querySelector('.power');
var angle = document.querySelector('.angle');
var weight = document.querySelector('.weight');
var working = false;
var thread;

power.value = 100;
angle.value = 45;
weight.value = 1;

// bullet init
bullet.innerHTML = '●';
bullet.style.fontWeight = 'bold';
var initialBulletHeight = parseFloat(bulletStat.bottom);
var currentBulletHeight = parseFloat(bulletStat.bottom);

// bullet stat
var movePower = 0;
var upPower = 0;
var rightPower = 0;

// setting
const air_resist = 1;
const gravity = 5;

shot.addEventListener('click', function() {

    if(!working){
        shot.innerText= 'reset';
        working = true;
        shooting();
    }else if (working) {
        shot.innerText= 'shot!';
        working = false;
        clearInterval(thread);
        bullet.style.left = '5px';
        bullet.style.bottom = '5vh';
    }
    
})


function shooting(){

    // console.log('bullet.style.left : ' + parseInt((window.getComputedStyle(bullet,null).left).substr(0, 10)));
    console.log('bullet.style.left : ' + parseInt(bulletStat.left));

    // if angle == 45 & power == 100;
    // movePower -> up 50, right 50
    // then
    // upPower = angle / 90 * 100 
    // rightPower = (90 - angle) / 90 * 100

    upPower = (angle.value / 90 * 100) / 100 * power.value;
    rightPower = ((90 - angle.value) / 90 * 100) / 100 * power.value;

    thread = setInterval(function () {
        // 중력 적용
        //getGravity();
        // 총알 높이 갱신
        currentBulletHeight = parseFloat(bulletStat.bottom);

        // console.log('upPower :', upPower, ' / rightPower :', rightPower);
        // console.log(weight.value);

        if(upPower != 0) {

            console.log(initialBulletHeight, ':', parseFloat(bullet.style.bottom) , '\n' + upPower, ':', rightPower);

            //상승
            if(upPower > 0){
                bullet.style.bottom = parseFloat(bulletStat.bottom) + upPower + 'px';
                upPower -= gravity;
                
            // 하강
            }else if(parseFloat(bullet.style.bottom) > initialBulletHeight && upPower < 0){
                bullet.style.bottom = parseFloat(bulletStat.bottom) + upPower + 'px';
                upPower -= gravity;
            }else if(parseFloat(bullet.style.bottom) < initialBulletHeight){
                upPower = 0;
                bullet.style.bottom == initialBulletHeight + 'px';

            }

        }

        if(rightPower > 0) {
            bullet.style.left = parseFloat(bulletStat.left) + rightPower + 'px';
            rightPower -= air_resist;
        }

        // bullet.style.left = (parseInt(window.getComputedStyle(bullet,null).left) + speed) + 'px';
        // speed -= resistance;
  
      }, 50);
}

function getGravity(){
    console.log(initialBulletHeight, ':', parseFloat(bullet.style.bottom));
    // 현재 총알이 공중이면
    if(parseFloat(bullet.style.bottom) > initialBulletHeight){
        bullet.style.bottom = (bulletStat.bottom - gravity >= initialBulletHeight 
            ? (bulletStat.bottom - gravity) : initialBulletHeight);
    }
}