// -------------------------------------------------------------------------------
//  Exercise 1 
// -------------------------------------------------------------------------------
// 1. 
// let people = ["Greg", "Mary", "Devon", "James"];
// let killer = people.slice(1,4)
// console.log(killer)

// 2.

// let people = ["Greg", "Mary", "Devon", "James"];
// let replace = people.splice(3, 1, "Jason");
// console.log(people)

// 3.

// let people = ["Greg", "Mary", "Devon", "James"];
// people.push("Alex");
// console.log(people);

// 4.

// let people = ["Greg", "Mary", "Devon", "James"];
// let index = people.indexOf("Mary");
// console.log(index)

// 5.

// let people = ["Greg", "Mary", "Devon", "James", "Alex"];
// let copyPeople = people.slice(0,1) +","+ people.slice(2,4);
// console.log(copyPeople);

// 6.

// let people = ["Greg", "Mary", "Devon", "James"];
// let index = people.indexOf("Foo");
// console.log(index)

// 7.

// let people = ["Greg", "Mary", "Devon", "James", "Alex"];
// let last = people[people.length - 1];
// console.log(last)

// 8. 

// let people = ["Greg", "Mary", "Devon", "James", "Alex"];
// let each
// for(each of people){
//     console.log(each)
// }

// 9.

// let people = ["Greg", "Mary", "Devon", "James", "Alex"];
// let each
// for(each of people){
//     console.log(each)
//     if(each=="Devon"){
//         break;
//     }
// }

// -------------------------------------------------------------------------------
// Exercise 2
// -------------------------------------------------------------------------------

// let colors = ["blue", "pink", "black", "red", "white"];
// let choice
// let i = 1
// for(choice of colors){
//     console.log(`My #${i} choice is ${choice}`)
//     i++;
// }

// -------------------------------------------------------------------------------
// Exercise 3
// -------------------------------------------------------------------------------

// 1.

// let userNumber = prompt("Pick a number")
// userNumber = Number(userNumber)
// while(userNumber<10){
//     userNumber = prompt("Pick a number, please")
// }

// -------------------------------------------------------------------------------
// Exercise 4
// -------------------------------------------------------------------------------

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building.numberOfFloors)
// console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor)
// console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0])
// let SarahDavid = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]
// let Dan = building.numberOfRoomsAndRent.dan[1]

// if(SarahDavid > Dan){
//     building.numberOfRoomsAndRent.dan[1] = 1200
// }

// console.log(building.numberOfRoomsAndRent.dan[1])

// -------------------------------------------------------------------------------
// Exercise 5
// -------------------------------------------------------------------------------

// let family = {
//     father: "Alex",
//     mother: "Aliza",
//     kid1: "Isaac",
//     kid2: "Maya",
//     kid3: "Caca",
// }

// for(let key in family){
//     console.log(key)
// }

// for(let key in family){
//     console.log(family[key])
// }

// -------------------------------------------------------------------------------
// Exercise 6
// -------------------------------------------------------------------------------

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

//   for(let item in details){
//     console.log(item)
//     console.log(details[item])
//   }


// -------------------------------------------------------------------------------
// Exercise 7
// -------------------------------------------------------------------------------

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// names.sort()

// let secretSocietyName = ""

// for(let name of names){
//     secretSocietyName = secretSocietyName + name[0]
//     console.log(secretSocietyName)
// }