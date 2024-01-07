// ----------------------------------------------
// Exercise 1 : Promise.All()
// ----------------------------------------------


const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});


Promise.all([promise1,promise2,promise3]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

// Promise.all resolve all the selected promise and dont bother about any rejected promise

// ----------------------------------------------
// Exercise 2 : Analyse Promise.All()
// ----------------------------------------------

function timesTwoAsync(x) {
    return new Promise(resolve => resolve(x * 2));
  }
  
  const arr = [1, 2, 3];
  const promiseArr = arr.map(timesTwoAsync);
  
  Promise.all(promiseArr)
    .then(result => {
      console.log(result);
    });

    // the output will be 2,4,6 because we mapped the array with a promise that double the result