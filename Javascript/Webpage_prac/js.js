const my_title = document.querySelector('#my_title');
const my_text = document.querySelector('#my_text');
const my_btn = document.querySelector('.my_btn');

const btn_clicked = function(){
    console.log(my_title.value);
    console.log(my_text.value);
}

my_btn.addEventListener('click', btn_clicked);