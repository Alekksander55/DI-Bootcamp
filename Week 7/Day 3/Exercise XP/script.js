// ----------------------------------------------
// Exercise 1 : Comparison
// ----------------------------------------------

// const compareToTen = (num) => {
//     return new Promise((resolve, reject) => {
//         if(num <= 10){
//             resolve('Smaller than 10')
//         } else {
//             reject('Bigger than 10')
//         }
//     })

// }

// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

//   compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// ----------------------------------------------
// Exercise 2 : Promises
// ----------------------------------------------

// const promise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log('Success'))
//         }, 4000);
//     })
// }

// promise()

// ----------------------------------------------
// Exercise 3 : Resolve & Reject
// ----------------------------------------------

// let promise = Promise.resolve(3);
// promise.then(function (result){
//     console.log(result)
// })

// let promise2 = Promise.reject('Boo!')
// promise2.catch(function (error){
//     console.log(error)
// })
