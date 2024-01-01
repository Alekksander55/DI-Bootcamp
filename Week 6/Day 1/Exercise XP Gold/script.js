// ---------------------------------------------------------
// Exercise 1 : Is_Blank
// ---------------------------------------------------------

// let myString = ''

// function CheckBlank(myString){
//     myString == '' ? console.log('true') : console.log('false')
// }

// console.log(CheckBlank(myString))

// ---------------------------------------------------------
// Exercise 2 : Abbrev_name
// ---------------------------------------------------------

// let name = 'Mickael Jackson'

// function abbrevName(name){
//     let newName = name.split(' ')
//     let initial = newName[1].split('')
//     newName = newName[0] + ' ' + initial[0] + '.'
//     return newName
// }

// console.log(abbrevName(name))

// ---------------------------------------------------------
// Exercise 3 : SwapCase
// ---------------------------------------------------------


// let str = 'The Quick Brown Fox'
// let newStr = ''

// function swapCase(str){
//     str = str.split('')
//     for(letter of str){
//         letter === letter.toUpperCase() ? letter = letter.toLowerCase() : letter = letter.toUpperCase()
//         newStr = newStr + letter
//     }
//     return newStr
    
// }

// console.log(swapCase(str))

// ---------------------------------------------------------
// Exercise 4 : Omnipresent Value
// ---------------------------------------------------------

// const myArr = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]

// const isOmnipresent = (arr, val) => arr.every(number => number.includes(val))

// ---------------------------------------------------------
// Exercise 5 : Red Table
// ---------------------------------------------------------

// let table = document.body.firstElementChild;
// let row = document.querySelectorAll('td')
// let data = Array.from(row)

// const coloring = data.forEach((cell) => {
//     console.log(cell.innerHTML)
//     for(i=0; i<6; i++) {
//     cell.innerHTML.includes(`${i}:${i}`) || cell.innerHTML.includes(`${i+2}:${i}`) || cell.innerHTML.includes(`${i}:${i+2}`)  ? cell.classList.add('red') : false
//     }
// })
