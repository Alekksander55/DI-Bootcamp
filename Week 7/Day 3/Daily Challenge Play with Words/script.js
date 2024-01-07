// let myArr =['ok', 'hello', 'bonjour']

// const makeAllCaps = (arr) => {
//     return new Promise((resolve, reject) => {
//         if(arr.every((word) => typeof word == 'string')){
//         resolve(arr.map((word) => word.toUpperCase()))
//         } else {
//             reject('Check your array, it is not filled with words only')
//         }
//     })
// }


// const sortWords = (arr) => {
//     return new Promise((resolve, reject) => {
//         if(arr.length>4){
//             resolve(arr.sort())
//         } else {
//             reject('Check that your array is shorter than 4 words and filled only with words')
//         }
//     })
// }

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))

const morse = `{
        " ": " ",
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
      }`

      const toJs = (arr) => {
        return new Promise((resolve, reject) => {
            let myObj = JSON.parse(arr)
            if(Object.keys(arr).length == 0){
                reject('Its empty dude')
            } else {
                resolve(myObj);
            }
        })
       }
      const toMorse = (morseJS) => {
        let input = prompt('Word or sentence').toLowerCase().split('')
        return new Promise((resolve, reject) => {
            if(input.every((element)=> Object.keys(morseJS).includes(element))){
                resolve(input.map((element) => (morseJS[element])))
            } else {
                reject ('You used a character that doesnt exist')
            }
        })   
        }

        const joinWords = (morseTranslation) => {
            for (const char in morseTranslation) {
                let body = document.querySelector('body')
                let div = document.createElement('div')
                div.innerText = `${morseTranslation[char]} \n`
                body.append(div)     
                }
            }


      
      toJs(morse)
      .then((result) => toMorse(result))
      .then((result) => joinWords(result))
      .catch((error) => console.log(error))