import * as fs from 'fs';

const readMyFile = fs.readFile('files/file-data.txt', 'utf-8', function (err,data){
    if(err) {console.log(err)} else { console.log(data)} 
})

export {readMyFile}