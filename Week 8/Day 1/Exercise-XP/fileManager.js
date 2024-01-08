import 'fs'
import { readFile, writeFile } from 'fs'

const hello = writeFile('Hello World.txt', 'Hello World !!', function(err){if(err) throw err;})
const bye = writeFile('Bye World.txt', 'Bye World !!', function(err){if(err) throw err;})
export {readFile, writeFile}