import * as fs from 'fs';
import * as path from 'path'



let infoDisplay = () => {
    let myPath = path.join('data', 'example.txt')
    let info = fs.statSync(myPath)
    console.log([{size:info.blksize}, {creationTime:info.birthtime}, {location:myPath}])
}

export {infoDisplay}