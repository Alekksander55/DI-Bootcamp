// --------------------------------------------------------
// Exercise 1 : Nested Functions
// --------------------------------------------------------

// let landscape = () => {

//     let result = "";
   
//     let flat = x => {
//       for(let count = 0; count<x; count++){
//         result = result + "_";
//       }
//     }
   
//     let mountain = x => {
//       result = result + "/"
//       for(let counter = 0; counter<x; counter++){
//         result = result + "'"
//       }
//       result = result + "\\"
//     }
   
//     flat(4);
//     mountain(4);
//     flat(4)
   
//     return result;
//    }
   
//    landscape()

//   console.log(landscape())

// --------------------------------------------------------
// Exercise 2 : Closure
// --------------------------------------------------------

const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);

// 13

// --------------------------------------------------------
// Exercise 3 : Currying
// --------------------------------------------------------

const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

// 31

// --------------------------------------------------------
// Exercise 4 : Currying
// --------------------------------------------------------

const curriedSumBis = (a) => (b) => a + b
const add5 = curriedSumBis(5)
add5(12)

// 17

// --------------------------------------------------------
// Exercise 5 : Composing
// --------------------------------------------------------

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1; // 11
const add5Bis = (num) => num + 5; // 15
compose(add1, add5Bis)(10)
// 