const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "qwerty",
    database: "users",
  },
});

module.exports = {db}

// db.select("id", "name", "email", "password")
//   .from("users")
//   .then((rows) => {
//     console.log(rows)
//   })
//   .catch((err)=> {
//     console.log(err)
//   })

// db('users')
// .select("id", "name", "email", "password")
// .then((data => {
//   console.log(data)
// }))

// db.raw(" select * from users")
// .then((data => {console.log(data.rows)}))

//INSERT
// db("users")
//   .returning(["id", "name"])
//   .insert([
//     { name: "Paul", email: "paul@gmail.com", password: "vivelafrance" },
//     { name: "Jack", email: "jack@gmail.com", password: "vivelafrance" },
//     { name: "Yves", email: "yves@gmail.com", password: "vivelafrance" },
//   ])

//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// //UPDATE
// db("users")
// .update({ name: "Aaron", email: "aaron@gmail.com" })
// .where({ id: 7 })
// .returning('*')
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// })

//DELETE
// db('users')
// .where({id:8})
// .del()
// .returning('*')
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// })