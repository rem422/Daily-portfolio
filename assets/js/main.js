/* MOBILE NAVBAR MENU */
const menu_Btn = document.querySelector('.navbar .menu-btn i');
const mobile_menu = document.querySelector('.navbar .menu');
const menu_items = document.querySelectorAll('.navbar .menu li a');

menu_Btn.addEventListener('click', () =>{
    menu_Btn.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_items.forEach(item => {
    item.addEventListener('click', ()=>{
        menu_Btn.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
/* END OF MOBILE NAVBAR MENU */

/* STICKY NAVBAR MENU */
window.addEventListener('scroll', function(){
    const header = document.querySelector(".navbar");
    header.classList.toggle('sticky', window.scrollY > 0);
});
/* END OF STICKY NAVBAR MENU */

/*See More, See Less Btns*/ 
const btns = document.querySelectorAll('.cta');

btns.forEach(btn => {
    btn.addEventListener('click', () =>{
        btn.parentNode.classList.toggle('activated');
    });
});

btns.forEach(btn => {
    btn.addEventListener('click', () =>{
        if( btn.parentNode.classList.contains('activated')){
            btn.innerHTML = "See less";
        }else{
            btn.innerHTML = "See more";
        }
    });
});
/*End of See More, See Less Btns*/ 

/* SCROLL TO TOP BTN */
const scrollUpBtn = document.querySelector('.scroll-up-btn');

    window.addEventListener('scroll', function(){
        scrollUpBtn.classList.toggle("active", window.scrollY > 500);
});

// scroll back to top
scrollUpBtn.addEventListener('click', () =>{
    document.documentElement.scrollTop = 0;
});
/* END OF SCROLL TO TOP BTN */

/* FOOTER COPYRIGHTS SECTION */
const year = document.getElementById('year');

currentYear = new Date().getFullYear();
newYear = new Date(`january 01 ${currentYear +1} 00:00:00`);
year.innerText = currentYear;
/* END OF FOOTER COPYRIGHTS SECTION */