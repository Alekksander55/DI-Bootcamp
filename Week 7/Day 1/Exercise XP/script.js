// ------------------------------------------------------
// Exercise 1 : Location
// ------------------------------------------------------

// the output will be 'I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)'

// ------------------------------------------------------
// Exercise 2: Display Student Info
// ------------------------------------------------------


// function displayStudentInfo({first, last}){
//   //destructuring
//   return `Your full name is ${first} ${last}`

// }

// console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));

// ------------------------------------------------------
// Exercise 3: User & Id
// ------------------------------------------------------

// const users = { user1: 18273, user2: 92833, user3: 90315 }
// const usersArray = Object.entries(users)
// console.log(usersArray)

// const newUsersArray = []
// for(user of usersArray){
//   newUsersArray.push([`${user[0]}`,` ${user[1]*2}`])
// }

// console.log(newUsersArray)

// ------------------------------------------------------
// Exercise 4 : Person Class
// ------------------------------------------------------
// it's an object built by a class

// ------------------------------------------------------
// Exercise 5 : Dog Class
// ------------------------------------------------------

// the 2 option is good

// ------------------------------------------------------
// Exercise 6 : Challenges
// ------------------------------------------------------

1//  [2] === [2]  will return false because they dont have the same reference in the memory
// {} === {} will return false because they dont have the same reference in the memory

2//  
//    number value in object1 is 4, as its redefined, but at first his value was 5
//    number value in object2 is 4, as object2 = object1 and object1 is redefined
//    number value in object3 is 4, as object3 = object2; object2=object1 and object1 is redefined
//    number value in object4 is 5, as its defined

// class Animal{
//   constructor(name, type, color){
//     this.name = name;
//     this.type = type;
//     this.color = color;
//   }
// }

// class Mamal extends Animal{
//   constructor(name, type, color){
//     super(name, type, color);
//   }
//   sound(noise){
//     return `${noise} I'm a ${this.type}, named ${this.name} and i'm ${this.color}`
//   }
// }

// const farmerCow = new Mamal('lili', 'cow', 'brown and white')

// console.log(farmerCow.sound('mooo'))