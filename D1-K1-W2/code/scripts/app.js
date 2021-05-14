// import Vue from "vue";



if (document.querySelector('#menuCloseBtn')) {
    const menuCloseBtn = document.querySelector('#menuCloseBtn');
    const navMenu = document.querySelector('.navmenu')

    menuCloseBtn.addEventListener('click', function (e) {
        navMenu.classList.remove('navmenu--open');
    });
}

if(document.querySelector('.menu-switcher')) {
    const menuSwitch = document.querySelector('.menu-switcher');
    const navMenu = document.querySelector('.navmenu');

    menuSwitch.addEventListener('click', function(e) {
        navMenu.classList.add('navmenu--open');
    });
}