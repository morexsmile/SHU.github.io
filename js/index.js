'use strict'

// JavaScript como he hecho el button de menu hamburgesa 

// Cuando hago CLICK en la clase header__button,  .header__nav TOGGLE activo  

const button = document.querySelector ('.header__button')
const ul =  document.querySelector ('.header__ul')

button.addEventListener('click' , ()=>{
    ul.classList.toggle('activo')
})

 