// init
var bullet = document.querySelector('.bullet');
var shot = document.querySelector('.shot');
var power = document.querySelector('.shot');
var shot = document.querySelector('.shot');
var shot = document.querySelector('.shot');
var working = false;
var thread;

// bullet stat
var shotPower = 100;
var speed = 0;
const air_resist = 1;
const gravity = 10;

bullet.innerHTML = '●';
bullet.style.fontWeight = 'bold';


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

    speed = shotPower;
    console.log('start' + speed);
    // console.log('bullet.style.left : ' + parseInt((window.getComputedStyle(bullet,null).left).substr(0, 10)));
    console.log('bullet.style.left : ' + parseInt(window.getComputedStyle(bullet,null).left));


    thread = setInterval(function () {
        
        bullet.style.left = (parseInt(window.getComputedStyle(bullet,null).left) + speed) + 'px';
        speed -= resistance;

        console.log(speed);
  
      }, 40);
}