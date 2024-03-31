const wrapper=document.querySelector('.wrapper');
const loginLinke=document.querySelector('.login-link');
const signInLinke=document.querySelector('.signIn-link');
const btnPopup=document.querySelector('.fa-user');
const iconClose=document.querySelector('.icon-close');

signInLinke.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLinke.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

let iconCart = document.querySelector('.fa-shopping-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');

iconCart.addEventListener('click',()=>{
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click',()=>{
    body.classList.toggle('showCart');
});
