// let b = 3, d = b, u = b;

// const tree = ++d * d*b * b++ + + --d+ + +b-- + + +d*b+ + u
// console.log(tree)

// // ++d * d*b * b++ +
// 4 * 4*3 * 3 +

// //  + --d+ + +b-- + 
// 3 + 4 +

// //  + +d*b+ + u
// 3 * 3 +
// 3

// filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map Object.keys

const users = {
    user1: { age: 44, name: 'picard', },
    user2: { age: 12, name: 'sisko', },
    user3: { age: 109, name: 'janeway',},
  }

  
const userKeys = Object.keys(users);
console.log(userKeys);
const usersMoreThan30 = userKeys.filter(caca => users[caca].age > 30);
console.log(usersMoreThan30)
const result = usersMoreThan30.map(id => ({id:id, ...users[id]}))
console.log(result)

const adult = Object.keys(users).filter(key => users[key].age > 30).map(id => ({id:id, ...users[id]}));
console.log(adult)