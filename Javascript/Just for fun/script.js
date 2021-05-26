var bullet = document.querySelector('.shooter');
var shot = document.querySelector('.shot');
var working = false;
var thread;

var shotPower = 100;
var speed = 0;
var resistance = 2;
var gravity = 5;

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
        bullet.style.top = '50px';
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