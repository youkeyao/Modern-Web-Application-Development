var menuBtn;
var nav;
var line1;
var line2;
var line3;
var category;

window.onload = function(){
    menuBtn = document.querySelector('.menubtn');
    nav = document.querySelector('nav');
    line1 = document.querySelector('nav .menubtn .line_1');
    line2 = document.querySelector('nav .menubtn .line_2');
    line3 = document.querySelector('nav .menubtn .line_3');
    category = document.querySelector('nav .category');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('nav_open');
        line1.classList.toggle('line_cross');
        line2.classList.toggle('line_none');
        line3.classList.toggle('line_cross');
        category.classList.toggle('fade_in');
    })
}