// -------------------------------------------------------------------------
// Exercise 1 : Timer
// -------------------------------------------------------------------------

// const hello = setTimeout(function(){                            Part I
//     alert('Hello World')
// }, 2000)

// let div = document.getElementById('container')                  Part II
// console.log(div)

// const hello = setTimeout(function(){
//         const p = document.createElement('p')
//         p.innerText = 'Hello World'
//         div.append(p)
// }, 2000)

// let div = document.getElementById('container')                  Part III
// console.log(div)
// let i = 0
// const hello = setInterval(function(){
//         const p = document.createElement('p')
//         p.innerText = 'Hello World'
//         div.append(p)
//         i++
//         console.log(i)
//         if(i > 4){
//             clearInterval(hello)
//         }
        
// }, 1000)

// let button = document.getElementById('clear')
// button.addEventListener('click', function() {
//     clearInterval(hello)
// })

// -------------------------------------------------------------------------
// Exercise 2 : Move The Box
// -------------------------------------------------------------------------


const animate = document.getElementById('animate')
let pos = 0

function myMove() {
let move = setInterval(function(){
    if(pos != 350){
        pos++;
        animate.style.left = pos + 'px';
    } else {
        clearInterval(move)
    }
})
}

