// // find the smallest distance between numbers in array
// // arr = [2, 5 ,3, 7 ,2, 3, 6, 8, 6]
// //

// let arr = [2, 5 ,3, 7 ,2, 3, 6, 8, 6]

// function minimumDistance(arr){
//     let distances = [];
//     for(i=0; i< arr.length; i++){
//         if(i != arr.lastIndexOf(arr[i])){
//             let myDistance = arr.lastIndexOf(arr[i]) - i;
//             distances.push(myDistance);
//         }
//     }
//     return distances.length===0 ? -1 : distances.sort()[0];
// }

// const getX = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(5);
//         }, 2000)
//     })
// }

// const getY = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(6);
//         }, 3000)
//     })
// }

// const getXY = () => {
//     let x = getX()
//     console.log(x)
//     x.then((resultX)=> {
//         console.log(resultX)
//         let y = getY()
//         console.log(y)
//         y.then((resultY) =>{
//             console.log(resultY)
//             return resultX + resultY
//         }).then((sum) =>{
//             console.log(sum)
//         })
//     })
// }

// getXY()

// let arrObj = [{username:'aaa', age:20},{username:'bbb', age:30},{username:'ccc', age:40}]


// const getData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(JSON.stringify(arrObj))
//         }, 2000);
//     })
// }

// getData()
// .then((resolve) => {
//     return JSON.parse(resolve)
// }).then((data) =>{
//     console.log(data)
// })


/**
Given n, take the sum of the digits of n.
If that value has more than one digit,
continue reducing in this way until a single-digit
number is produced.
This is only applicable to the natural numbers.
Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */

let n = 493193

function Reducer(n){
    let numerizer = (num) => Number(num)
    let numArray = Array.from(String(n), numerizer)
    let sum = 0
    numArray.forEach(number => {
        sum = sum + number
        });
    if(sum>9){
        let numerizer1 = (num1) => Number(num1)
    let numArray1 = Array.from(String(sum), numerizer1)
    let sum1 = 0
    numArray1.forEach(number => {
        sum1 = sum1 + number
        });
        console.log(sum1)
    } else {console.log(sum)}
}

Reducer(n)