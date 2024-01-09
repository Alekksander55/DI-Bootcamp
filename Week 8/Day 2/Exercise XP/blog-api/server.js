const express = require('express');

const app = express();

app.listen(3001, ()=> {
    console.log('run on port 3001')
});

app.use('/', express.static(__dirname + '/public'))

const data = [
    {
        id:1,
        title:"Harry Potter 1",
        content:"An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself",
    },
    {
        id:2,
        title:"Harry Potter 2",
        content:"An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
    },
    {
        id:3,
        title:"Harry Potter 3",
        content:"Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding ...",
    },
    {
        id:4,
        title:"Harry Potter 4",
        content:"A fully revived Voldemort emerges from it and summons the Death Eaters with the Dark Mark.",
    },
    {
        id:5,
        title:"Harry Potter 5",
        content:"After a lonely summer on Privet Drive, Harry (Daniel Radcliffe) returns to a Hogwarts full of ill-fortune.",
    },
    {
        id:6,
        title:"Harry Potter 6",
        content:"A blowhard and man with many friends, his jubilant smile and need to collect powerful and famous wizards for his Slug Club are ever-present",
    },
    {
        id:7,
        title:"Harry Potter 7",
        content:"Voldemort's (Ralph Fiennes') power is growing stronger. He now has control over the Ministry of Magic and Hogwarts",
    },
]

// GET /posts
app.get('/posts', (request, response) => {
    response.send(data)
})

// GET /posts/:id
// app.get('/posts/:id', (request, response) => {
//     if(Object.values(request.params) > data.length) return response.sendStatus(404)
//     response.send(data[Object.values(request.params)-1])
// })

app.get('/posts/:id', (request, response) => {
    const {id} = request.params
    const post = data.find((item) => item.id == id);
    if(!post) return response.sendStatus(404)
    response.send(post)

})