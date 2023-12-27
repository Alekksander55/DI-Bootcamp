// ------------------------------------------------------------------------------
// Exercise 1 : Find The Numbers Divisible By 23
// ------------------------------------------------------------------------------

// function displayNumbersDivisible(divisor) {
//     let i=0
//     let sum = 0
//     for(i; i<501; i++){
//         if(i % divisor == 0){
//             console.log(i)
//             sum = i + sum
//         }
//     }
//     console.log(sum)
// }

// displayNumbersDivisible(3)

// ------------------------------------------------------------------------------
// Exercise 2 : Shopping List
// ------------------------------------------------------------------------------

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// const shoppingList = ["banana", "orange", "apple"]


// function myBill(){
//     let bill = 0
// for(item of shoppingList){
//     if(item in stock === true){
//         if(stock[item] > 0){
//         bill = bill + prices[item] 
//         stock[item]--   
//         }
//     }
// } return bill;
// }

// // myBill()
// console.log(myBill())
// console.log(stock)

// ------------------------------------------------------------------------------
// Exercise 3 : What’s In My Wallet ?
// ------------------------------------------------------------------------------
// const coins = [0.25, 0.10, 0.05, 0.01]

// function changeEnough(itemPrice, amountOfChange){
//    let sum = 0
//    for(i=0; i<4; i++){
//     sum += amountOfChange[i] * coins[i]
//    } if(sum >= itemPrice){
//     return true;
//    } else {
//     return false;
//    }
// }

// console.log(changeEnough(0.75, [0,0,20,5] ))

// ------------------------------------------------------------------------------
// Exercise 4 : Vacations Costs
// ------------------------------------------------------------------------------


// function hotelCost(){
//     let numberOfNight = prompt("How many nights would you like to stay ?")
//     while(isNaN(numberOfNight) == true){
//         numberOfNight = prompt("Please precise a number")
//     }
//     let sum = numberOfNight * 140
//     return `${sum}$`
// }

// function planeRideCost(){
//     let destination = prompt("Where would you like to fly ?")
//     if( typeof destination != 'string'){
//         destination = prompt("Please choose a destination :")
//     } else if( destination == 'London'){
//         return `183$`
//     } else if( destination == 'Paris'){
//         return `220$`
//     } else {
//         return `300$`
//     }
// }

// function rentalCarCost(){
//     let numberOfDay = prompt(`How many days would you like to rent a car`)
//     while(isNaN(numberOfDay) == true){
//         numberOfDay = prompt("Please precise a number")
//     }
//     let sum = numberOfDay * 40
//     if(numberOfDay>10){
//         sum = sum - (sum*0.05)
//     }
//     return `${sum}$`
// }

// function totalVacationCost(){

//     return `Your vacation will cost ${hotelCost()} of Hotel, ${planeRideCost()} for planes, ${rentalCarCost()} for the car`
// }

// console.log(totalVacationCost())

// ------------------------------------------------------------------------------
// Exercise 5 : Users
// ------------------------------------------------------------------------------

// let div = document.querySelector("div")
// console.log(div)
// let li = document.querySelectorAll("li")

// li[1].textContent = "Richard"
// li[3].remove()
// li[0].textContent = "Alex"
// li[2].textContent = "Alex"

// let ul = document.getElementsByClassName('list')
// ul[0].classList.add('student_list')
// ul[1].classList.add('student_list')
// ul[0].classList.add('university', 'attendance')
// console.log(ul)

// div.classList.add('light_blue')
// li[4].classList.add('hide')
// li[1].classList.add('border')

// let body = document.querySelector("body")
// body.classList.add('giant')

// ------------------------------------------------------------------------------
// Exercise 6 : Change The Navbar
// ------------------------------------------------------------------------------


// let div = document.querySelector('div') // 1
// console.log(div)

// div.setAttribute("id", 'socialNetworkNavigation' ) // 2

// let newLi = document.createElement('li') //3.1
// let newText = document.createTextNode("Logout") //3.2
// newLi.appendChild(newText) // 3.3
// let ul = document.querySelector('ul') 
// ul.appendChild(newLi) // 3.4

// let firstLi = ul.firstElementChild // 4
// console.log(firstLi.textContent)
// let lastLi = ul.lastElementChild
// console.log(lastLi.textContent)

// ------------------------------------------------------------------------------
// Exercise 7 : My Book List
// ------------------------------------------------------------------------------


const allBooks = [{

    title: 'Harry Potter',
    author: 'JK Rowling',
    image: 'https://images.booksense.com/images/403/353/9780590353403.jpg',
    alreadyRead: 'true'
    } ,

    {
        title: 'Lord of the rings',
        author: 'Tolkien',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg',
        alreadyRead: 'false'
    } ];

let section = document.querySelector('section')

for(i in allBooks){
    let div = document.createElement(`div`)   
    div.classList.add('light_blue', 'center')
    section.appendChild(div)
    let p = document.createElement(`p${i}`)
    div.appendChild(p)
    let credits = document.createTextNode(`${allBooks[`${i}`].title} written by ${allBooks[`${i}`].author}`)
    p.append(credits)
    let img = document.createElement(`img`)
    img.setAttribute('src', allBooks[`${i}`].image)
    img.setAttribute('width', '100px')
    div.appendChild(img)
}
// let div0 = document.createElement('div')
// let div1 = document.createElement('div')

// div0.classList.add('light_blue', 'center')
// div1.classList.add('light_blue', 'center')

// section.appendChild(div0)
// section.appendChild(div1)

// let p0 = document.createElement('p')
// let p1 = document.createElement('p')

// div0.appendChild(p0)
// div1.appendChild(p1)

// let credits0 = document.createTextNode(`${allBooks[0].title} written by ${allBooks[0].author}`)
// let credits1 = document.createTextNode(`${allBooks[1].title} written by ${allBooks[1].author}`)

// p0.append(credits0)
// p1.append(credits1)

// let img0 = document.createElement('img')
// let img1 = document.createElement('img')

// img0.setAttribute('src', allBooks[0].image)
// img0.setAttribute('width', '100px')
// img1.setAttribute('src', allBooks[1].image)
// img1.setAttribute('width', '100px')

// div0.appendChild(img0)
// div1.appendChild(img1)

