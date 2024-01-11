const express = require('express')
const todoRoutes = require('./routes/todo-routes.js')
const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(5000, ()=>{
    console.log('Running on 5000')
})

app.use('/api/todos', todoRoutes)