import {greet} from './greeting.js'
import {message} from './colorful-message.js'
import { readMyFile } from './files/read-file.js'


console.log(message(greet('Alexander')))
readMyFile