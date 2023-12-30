// function numbers() {
//     for (let i = 0; i < 5; i += 1) {
//       console.log(i);
//     }
//       console.log(i);
//   }
//   numbers();

// function checkYear(){
//     let Year = Number(prompt('Give your year'))
//     console.log(Year>2000 ? 'Vous etes dans le 21e siecle' : 'Vous vivez au moyen age')
// }

// checkYear()

// const calculator = (x,y,operator) => {
//     return operator === '+' ? x+y:
//         operator === '-' ? x-y:
//       operator === '*' ? x*y:
//     operator === '/' ? x/y: 'Invalid operator'
// }

// console.log(calculator(3,4,'/'))

// function add() {
//     let counter = 0;
//     function plus() {
//         counter += 1;
//         console.log(counter) ;
//     }
//     plus();  
//   }
  
//   add()

// function outside(x) {
//     function inside(y) {
//        return x + y;
//     }
//     return inside;
//   }

// let fnInside = outside(3)
// let result = fnInside(2)
// console.log(result)


// const add = a => b => c =>;
// const result = add
// console.log(result) // console.log 5

// const person = {
//     name: 'Lydia',
//     age: 21,
//   };
  
// //   for (const item in person) {
// //     console.log(person[item]);
// //   }

// function createLikeCounter() {
//     let count = 0;
//     return function() {
//         count += 1; // Increment the count
//         return count; // Return the updated count
//     };
// }

// // Create a counter for each photo
// let photo1Likes = createLikeCounter();
// let photo2Likes = createLikeCounter();

// // Simulate liking each photo
// console.log("Photo 1 likes:", photo1Likes()); // Photo 1 likes: 1
// console.log("Photo 1 likes:", photo1Likes()); // Photo 1 likes: 2
// console.log("Photo 2 likes:", photo2Likes()); // Photo 2 likes: 1


// const numbers = [10,11,12,15,20];
// numbers.forEach((number) => {
    
//     number % 2 == 0 ? console.log(`${number} is odd`) : console.log(`${number} is even`)

// })


// numbers.forEach((number) => {
//     number % 2 == 0 && console.log(number)
// })

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// let someReturn = myArr.some((number) => {
//     console.log(number)
//     return number  9
// })

// console.log(someReturn)

// const words = ["wow","hey","bye"];

// let someWords = words.some((word) => {
//     console.log(word)
//     return word[0] == "i"
// })

// console.log(someWords)

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
// let everyCheck = myArr.every((number) => {
//     console.log(number)
//     return number < 7
// })

// const words = ["hello","hey","hola"];
// let everyWords = words.every((word) =>{
//     console.log(word)
//     return word[0] == 'h'
// })

// console.log(everyWords)

// const originalArray = ["hello","hey","hola"];
// let newArray = originalArray.map((number) => {
//     return number[0].toUpperCase()
//     return number
// })

// console.log(newArray)


// const myArr = [10,20,30,40];
// let newArr = myArr.map((element, i) => {
//     return `${element} is element and position is ${i}`
// })
// console.log(newArr)

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const newNumbers = numbers.filter((number) =>{
//     return number > 2 && number % 2 == 0
// })

// console.log(newNumbers)

// const arr = [1, 4, 9, 16];
// let sum=arr.reduce((acc, val) => acc + val)
// console.log(sum)

// let party = [
//     {
//       desert: 'Chocolate Mousse',
//       calories: 30,
//     },
//     {
//       desert: 'Apple Pie',
//       calories: 15,
//     },
//     {
//       desert: 'Croissant',
//       calories: 50,
//     },
//     {
//       desert: 'Strawberry Icecream',
//       calories: 5,
//     },
//   ]

//   let sum = party.reduce((acc,val) => {
//        return val.desert != 'Apple Pie' ? acc + val.calories : acc
//   },0)

//   console.log(sum)



let a, b, rest;
[a,b] = [10,20];
rest = [30,40,50]

console.log(a)
console.log(b)
console.log(rest)