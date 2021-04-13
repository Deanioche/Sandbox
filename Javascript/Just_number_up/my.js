let tick = 0;
let income_timer = 10;
let income_cool = 10;
let income_rate = 1;
let tax_timer = 100;

let A = document.querySelector(".A");
let B = document.querySelector(".B");
let C = document.querySelector(".C");
let btn_income_up = document.querySelector(".btn-income-up");

window.onload = function() {

    timegoes();

}

function timegoes() {

    setTimeout(function() {
    
        tick++;
        C.innerText = tick;
        
        run_by_every_tick();

    },1);

}

function run_by_every_tick() {
    timegoes();
    commonIncome();
    commonTax();
    check();
}

function check() {

    btn_income_up.innerText = (tick - Number(A.innerText));
}

function commonIncome() {

    if(tick >= income_timer){

        A.innerText = Number(A.innerText) + income_rate; 
        income_timer += income_cool;

    }
   
}

function commonTax() {

    if(tick >= tax_timer){
    
        A.innerText = Number(A.innerText) - 5; 
        B.innerText = Number(B.innerText) + 5; 
        tax_timer += 100;

    }
}

/*
btn
*/



btn_income_up.addEventListener("click", function() {

    console.log(income_cool, income_timer, income_rate);

    if(income_cool > 5){
        income_cool--;
    }else if(income_cool == 5) {
        income_cool = 10;
        income_rate += 1;
    }

})
