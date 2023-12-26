// -------------------------------------------------------------------------
// Exercise 1 : Change The Article
// -------------------------------------------------------------------------

// let h1 = document.querySelector('h1'); // 1
// console.log(h1)

// let article = document.querySelector('article'); // 2
// article.removeChild(article.lastElementChild)

// let h2 = document.querySelector('h2') // 3
// h2.addEventListener('click', function() {
//     h2.style.backgroundColor = 'red'}
// )

// let h3 = document.querySelector('h3') // 4
// h3.addEventListener('click', function() {
//     h3.style.display = 'none'}
// )
// let p = document.querySelectorAll('p') // 5
// console.log(p)
// let button = document.querySelector('button')
// button.addEventListener('click', function() {
//     for(i in p){
//         p[i].style.fontWeight = 700
//     }   
// })

// h1.addEventListener('mouseover', function(){
//     let x = Math.random() * 100;
//     h1.style.fontSize = x + 'px'
// })

// h2.addEventListener('mouseover', function(){
//     h2.classList.add('fade-in')
// })

// -------------------------------------------------------------------------
// Exercise 2 : Work With Forms
// -------------------------------------------------------------------------

// let form = document.querySelector('form') // 1
// // console.log(form)

// let firstInput = document.getElementById('fname') // 2
// // console.log(firstInput)
// let secondInput = document.getElementById('lname')
// // console.log(secondInput)

// let input1 = document.getElementsByName('firstname') //3
// console.log(input1)
// let input2 = document.getElementsByName('lastname')
// // console.log(input2)

// let ul=document.querySelector('ul')



// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     let fname = firstInput.value
//     let lname = secondInput.value
//     if(fname == '' || lname == ''){
//         alert('Please fill')
//     } else {
//             const li1=document.createElement("li");
//             li1.innerText=firstInput.value
//             const li2=document.createElement("li");
//             li2.innerText=secondInput.value
//             ul.append(li1)
//             ul.append(li2)}
//         })

// -------------------------------------------------------------------------
// Exercise 3 : Transform The Sentence
// -------------------------------------------------------------------------

// let allBoldItems

// function getBoldItems() {
//     allBoldItems = document.querySelectorAll('strong')

// }

// function highlight() {
//     getBoldItems()
//     for(item of allBoldItems){
//         item.style.color = 'blue'
//     }
// }

// function returnItemsToDefault(){
//     getBoldItems()
//     for(item of allBoldItems){
//         item.style.color = 'black'
//     }
// }

// let p = document.querySelector('p')
// p.addEventListener('mouseover', highlight)
// p.addEventListener('mouseout', returnItemsToDefault)

// -------------------------------------------------------------------------
// Exercise 4 : Volume Of A Sphere
// -------------------------------------------------------------------------

// let form = document.getElementById('MyForm')
// let π = Math.PI
// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log(e)
//     let r = document.getElementById('radius').value
//     v = 4/3*π*r*r*r
//     const answer = document.createElement('p')
//     answer.innerText= `With a radius of ${r}, the volume of your sphere will be ${v}`
//     form.append(answer)
// })
