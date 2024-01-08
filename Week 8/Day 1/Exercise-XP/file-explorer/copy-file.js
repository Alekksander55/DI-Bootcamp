const fs = require('fs')

fs.readFile('source.txt', 'utf-8', function(err,data){
    console.log(data)
})

fs.copyFile('source.txt', 'destination.txt', (err) => console.log(err))