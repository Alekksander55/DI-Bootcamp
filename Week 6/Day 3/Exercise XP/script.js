// -------------------------------------------------------------------
// Exercise 1 : Scope
// -------------------------------------------------------------------

//
// #1
// After using funcOne(), value of `a` will be 3 because the function modify the value of `a`
// If you declare with a const, the value of `a` will stay at 5
// #2
// After using funcThree(), funcTwo(), funcThree(), value of `a` will alternate 0 -> 5 -> 0  because those two functions are not `connected`, so funcThree() will use the value that is available in the global scope
// If you declare with a const, the value of `a` will stay at 0
// #3
// in funcFour() the value of `a` will be undefined because we didnt declare it
// in funcFive() the value of `a` will be undefined because we didnt declare it
// #4
// in funcSix() the value of `a` will be "test", but out of the function, it will be `2`.
// No difference with a const, because all the elements are re-declared in each scopes
// #5 
//  As there is no condition, in the block, `a` will be 5, outside the "{}" `a` will be 2
// No difference with a const, because all the elements are re-declared in each scopes

// -------------------------------------------------------------------
// Exercise 2 : Ternary Operator
// -------------------------------------------------------------------

// // 1.
// let winBattle = () => true;
// // 2.
// let xp = 0
// // 3.
// xp = winBattle ? xp=10 : xp=1
// // 4.
// console.log(xp)

// -------------------------------------------------------------------
// Exercise 3 : Is It A String ?
// -------------------------------------------------------------------
// let myString
// let isString = (myString) => typeof myString == 'string' ? true : false

// -------------------------------------------------------------------
// Exercise 4 : Find The Sum
// -------------------------------------------------------------------

// let sum = (a,b) => a+b;
// console.log(sum(1,2))

// -------------------------------------------------------------------
// Exercise 5 : Kg And Grams
// -------------------------------------------------------------------
// 1.
//  function convertor(weight){
//     weight * 1000 + ' grams';
//  }
//
// 2. 
// const convertor = function(weight){
//     weight * 1000 + ' grams';
//     return weight
// }
//
// 3. A function declaration will load automatically before any other code, function expression will load when reached only
// 4. 
//let convertor = (weight) => weight * 1000 + ' grams';

// -------------------------------------------------------------------
// Exercise 6 : Fortune Teller
// -------------------------------------------------------------------
// let body = document.querySelector('body');

// (function fortuneTeller(childrenNumber, partnerName, location, job){
//     let div = document.createElement('div')
//     div.innerText = `You will be a ${job} in ${location}, and married to ${partnerName} with ${childrenNumber} kids.`
//     body.append(div)   
// })(1,2,3,4);

// -------------------------------------------------------------------
// Exercise 7 : Welcome
// -------------------------------------------------------------------

// let navbar = document.getElementById('navbar');


// (function welcome(username) {
//     let div = document.createElement('div')
//     let img = document.createElement('img')
//     img.setAttribute('src','https://images.mubicdn.net/images/cast_member/34836/cache-597973-1602713164/image-w856.jpg')
//     img.setAttribute('width', '100px')
//     img.setAttribute('height', '85px')
//     navbar.append(img)
//     div.innerText = `Welcome, ${username}`
//     navbar.append(div)
// })('John');

// -------------------------------------------------------------------
// Exercise 8 : Juice Bar
// -------------------------------------------------------------------
// Part I

// let body = document.querySelector('body');

// let makeJuice = (size) => { 
//     let addIngredients = (firstIngredient, secondIngredient, thirdIngredient) => {
//         let div = document.createElement('div')
//         body.append(div)
//         div.innerText = `The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}".` }
    
//     size == 'small' || 'medium' || 'large' ? addIngredients : alert('Choose a regular size please')   
//     }

// let makeJuice = (size) => { 
//     let ingredients = []
        
//     let addIngredients = (firstIngredient, secondIngredient, thirdIngredient) => {
//         ingredients.push(firstIngredient, secondIngredient, thirdIngredient)
//         // let div = document.createElement('div')
//         // body.append(div)
//         // div.innerText = `The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}".` 
//     }
//     let displayJuice = () => {
//         console.log(ingredients)
//         let div = document.createElement('div')
//         body.append(div)
//         div.innerText = `The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}, ${ingredients[3]}, ${ingredients[4]}, ${ingredients[5]}.` 
//     }
//         // size == 'small' || size == 'medium' || size == 'large' ? alert('It will be ready in a minute') : alert('Choose a regular size : small, medium or large'); 
//     addIngredients('Banana','Strawberry','Orange')
//     addIngredients('Grapes','Kiwi','Dattes')
//     displayJuice()
// }

//     makeJuice('small')

    