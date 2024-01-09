const express = require('express');

const app = express();

app.listen(3001, ()=> {
    console.log('run on port 3001')
});

app.use('/', express.static(__dirname + '/public'))

const users = [
    {id:1, name:'John', email:'john@gmail.com'},
    {id:2, name:'Guy', email:'guy@gmail.com'},
    {id:3, name:'Alex', email:'alex@gmail.com'},
    {id:4, name:'Harry', email:'harry@gmail.com'},
];

app.get('/users', (request, response) => {
    response.send(users)
})


// params

app.get('/users/:id', (request, response) => {
    if(Object.values(request.params) > users.length) return response.sendStatus(404)
    response.send(users[Object.values(request.params)-1])
})

//query

app.get('/search', (request, response) => {
    console.log(request.query)
    const {name} = request.query
   const filteredUsers = users.filter(item => {return item.name.toLowerCase().includes(name.toLowerCase())
    })
    if(filteredUsers.length == 0){
        return response.sendStatus(404)
    }
    response.send(filteredUsers)
})





