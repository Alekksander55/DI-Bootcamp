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
  
//   for (const item in person) {
//     console.log(person[item]);
//   }

function createLikeCounter() {
    let count = 0;
    return function() {
        count += 1; // Increment the count
        return count; // Return the updated count
    };
}

// Create a counter for each photo
let photo1Likes = createLikeCounter();
let photo2Likes = createLikeCounter();

// Simulate liking each photo
console.log("Photo 1 likes:", photo1Likes()); // Photo 1 likes: 1
console.log("Photo 1 likes:", photo1Likes()); // Photo 1 likes: 2
console.log("Photo 2 likes:", photo2Likes()); // Photo 2 likes: 1