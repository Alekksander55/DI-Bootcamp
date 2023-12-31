// -------------------------------------------------------------------------
// Exercise 1 : Colors
// -------------------------------------------------------------------------

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// let display = colors.forEach((color, index) => {
//     console.log((`${index+1}# choice is ${color}`))
// })

// let checkColor = colors.some((color) => {color == 'Violet' ? console.log('Yeah') : console.log('No')})

// -------------------------------------------------------------------------
// Exercise 2 : Colors #2
// -------------------------------------------------------------------------

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// let display = colors.forEach((color, index) => {index < 3 ? console.log(`My ${index+1}${ordinal[index+1]} is ${color}`) : console.log(`My ${index+1}${ordinal[0]} is ${color}`)})


// -------------------------------------------------------------------------
// Exercise 3 : Analyzing
// -------------------------------------------------------------------------

// 1. [ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// 2. ['U','S','A']
// 3. ['','',] i failed.. :-( 

// -------------------------------------------------------------------------
// Exercise 4 : Employees
// -------------------------------------------------------------------------

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// const welcomeUsers = users.map((user) => { return "Hello " + `${user.firstName}`})
// const fullStackUsers = users.filter(user => user.role == 'Full Stack Resident')
// const lastNameFullStackUsers = fullStackUsers.map((user) => {return `${user.lastName}`})

// console.log(lastNameFullStackUsers)

// -------------------------------------------------------------------------
// Exercise 5 : Star Wars
// -------------------------------------------------------------------------

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// const epicButReadable = epic.reduce((Arr, word) => { return Arr = Arr + " " + word})
// console.log(epicButReadable)

// -------------------------------------------------------------------------
// Exercise 6 : Employees #2
// -------------------------------------------------------------------------

// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];


// const goodStudents = students.filter(student => student.isPassed)
// const congrats = goodStudents.forEach(student => console.log(`Good Job ${student.name}, you passed the ${student.course}'s course`))


