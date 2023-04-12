'use strict'

const bg = document.getElementsByClassName('header-mob__menu-bg')[0];
const menu = document.getElementsByClassName('header-mob__menu')[0];
const body = document.getElementsByTagName('body')[0];

function onClick(){

    if(bg.classList[1] !== 'active-bg' && menu.classList[1] !== 'active-menu'){
        body.classList.toggle('hide') ;
        bg.classList.toggle('active-bg');
        menu.classList.toggle('active-menu');

    }else{
        menu.classList.toggle('active-menu');
        bg.classList.toggle('active-bg');
        body.classList.toggle('hide') ;
    }
}