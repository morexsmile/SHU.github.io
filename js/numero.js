'use strict'
// JavaScript como he hecho el button de menu hamburgesa 

// Cuando hago CLICK en la clase header__button,  .header__nav TOGGLE activo  

const button = document.querySelector ('.header__button')
const ul =  document.querySelector ('.header__ul')

button.addEventListener('click' , ()=>{
    ul.classList.toggle('activo')
})

// Elemento de Lightbox

// Cuando hago CLICK en cada .main__pic, se ADD un event listener
// Cuando hago CLICK en una .main__pic, se activa el .main__lightbox
// Cuando hago CLICK en una .main__pic, se ADD la clase 'activo' a .main__lightbox
// Cuando hago CLICK en una .main__pic, se actualiza la imagen principal en el .main__lightbox


const pics = document.querySelectorAll('.main__pic')
const lightbox = document.querySelector('.main__lightbox')
const big = document.querySelector('.main__big')
const cierre = document.querySelector('.main__close')

pics.forEach((eachMain__pic , index) => {
    pics[index].addEventListener('click', () => {
        lightbox.classList.add('activo')
        big.src = pics[index].src
    })
})

// Como funciona button de cierre en Lightbox
// Cuando hago CLICK en .main__cierre, se ADD un event listener
// Cuando hago CLICK en .main__cierre, se REMOVE la clase 'activo' del -main__lightbox

cierre.addEventListener('click' , () => {
    lightbox.classList.remove('activo')
})

