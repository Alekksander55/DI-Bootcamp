const express = require('express')
const app = express()

app.listen(5000, ()=>{
    console.log('running on port 5000')
});

const books = [
    {
        id:1,
        title:"Harry Potter 1",
        author:"Jk Rowling 1",
        publishedYear: 1999
    },
    {
        id:2,
        title:"Harry Potter 2",
        author:"Jk Rowling",
        publishedYear: 2000
    },
    {
        id:3,
        title:"Harry Potter 3",
        author:"Jk Rowling",
        publishedYear: 2001
    },
    {
        id:4,
        title:"LOTR",
        author:"Tolkien",
        publishedYear:2004
    },
    {
        id:5,
        title:"LOTR 2",
        author:"Tolkien",
        publishedYear:2005
    },
    {
        id:6,
        title:"Game of Throne",
        author:"Georges Martin",
        publishedYear:2001
    },
    {
        id:7,
        title:"Game of Throne",
        author:"Georges Martin",
        publishedYear:2004
    }
]

app.get('/', express.static(__dirname+'/public'))

app.get('/api/books', (req,res)=>{
    res.send(books)
})

app.get('/api/books/:bookId', (req,res)=>{
    const {bookId} = req.params
    const book = books.find((item) => item.id == bookId)
    if(!book) return res.sendStatus(404)
    res.send(book)
})