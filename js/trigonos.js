'use strict'

// JavaScript como he hecho el button de menu hamburgesa 

// Cuando hago CLICK en la clase header__button,  .header__nav TOGGLE activo  

const button = document.querySelector ('.header__button')
const ul =  document.querySelector ('.header__ul')

button.addEventListener('click' , ()=>{
    ul.classList.toggle('activo')
})


// Estructura de Slider

// ADD un event listener para CLICK en cada punto
// Cuando hago CLICK en un punto, se obtiene su posición en el array
// Calcular la operación para ajustar la posición de la imagen principal
// Cuando hago CLICK en un punto, se ajusta la transformación horizontal de la imagen principal
// Cuando hago CLICK en un punto, se REMOVE la clase 'activo' de todos los puntos
// Cuando hago CLICK en un punto, se ADD la clase 'activo' al punto

const grande = document.querySelector('.main__grande')
const punto = document.querySelectorAll('.li__punto') 

console.log ( grande )
console.log ( punto )

punto.forEach(( eachPunto , index ) => {
    punto[index].addEventListener('click' , () => {
        let posicion = index
        let operacion = posicion * -25
    grande.style.transform = `translateX(${operacion}%)`       
        punto.forEach ( ( cadaPunto , index) => {
            punto[index].classList.remove ('activo')
        })
        punto[index].classList.add ('activo')
    })
})