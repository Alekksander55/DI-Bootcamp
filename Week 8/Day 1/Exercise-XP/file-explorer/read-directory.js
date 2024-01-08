const fs = require('fs')

const displayFiles = fs.readdir(__dirname, (err, files) => {
    if(err) console.log(err); else{ files.forEach(file => {console.log(file)})}
})