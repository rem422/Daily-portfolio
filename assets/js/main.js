/* MOBILE NAVBAR MENU */
const menu_Btn = document.querySelector('.navbar .menu-btn i');
const mobile_menu = document.querySelector('.navbar .nav-menu');
const menu_items = document.querySelectorAll('.navbar .nav-menu li a');

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
const navbar = document.querySelector('.navbar');

document.addEventListener('scroll', () =>{
    let nav = window.scrollY;
    
    if(nav>50 ){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
})
/* END OF STICKY NAVBAR MENU */

/* SCROLL TO TOP BTN */
const scrollUpBtn = document.querySelector('.scroll-up-btn');

    document.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    if(scrolled > 500){
        scrollUpBtn.classList.add('show');
    }else{
        scrollUpBtn.classList.remove('show');
    }
});

scrollUpBtn.addEventListener('click', () =>{
    document.documentElement.scrollTop =0;
})
/* END OF SCROLL TO TOP BTN */

/* FOOTER COPYRIGHTS SECTION */
const year = document.querySelector('.year');

currentYear = new Date().getFullYear();
newYear = new Date(`january 01 ${currentYear +1} 00:00:00`);
year.innerText = currentYear;
/* END OF FOOTER COPYRIGHTS SECTION */





