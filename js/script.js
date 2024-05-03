const navbarnav = document.querySelector(
    '.navbar-nav'
);

document.querySelector('#hamburger-menu').
onclick = () => {
    navbarnav.classList.toggle('active')
};

const menu=document.querySelector
('#hamburger-menu');

document.addEventListener('click' , function(e){
    if (!menu.contains(e.target) && !navbarnav.contains(e.target)){
        navbarnav.classList.remove('active');
    }
})