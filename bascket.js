'use strict';

const bascketCounterEl = document.querySelector('.cartIconWrap span');
const bascketTotalEl = document.querySelector('.bascketTotal');
const bascketTotalValueEl = document.querySelector('.bascketTotalValue');
const bascketEl = document.querySelector('.bascket');


//Обработчик открытия корзины, те при клике на корзину - будет открываться сама корзина
document.querySelector('.cartIconWrap').addEventListener('click', () => {
    bascketEl.classList.toggle('hidden');
});


const bascket = {};
document.querySelector('.featuredItems').addEventListener('click',event => {
    if(!event.target.closeSt('.addToCard')){
        return;
    }
})