const express = require('express')
const questionsRoute = require('./routes/questions.js')
const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(5000, ()=>{
    console.log('Running on port 5000')
})

app.use('/quiz', questionsRoute)