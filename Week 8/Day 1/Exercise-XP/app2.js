import { readFile, writeFile } from "./fileManager.js";

const read = readFile('Hello world.txt', 'utf-8', function(err,data){const content = data; console.log(content);})
const reWrite = writeFile('Bye World.txt', 'Writing to the file', function(err){if(err) throw err;})