const myQuotes = [
    {id:0,
    author:'Nelson Mandela',
    quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.',},

    {id:1,
    author:'Walt Disney',
    quote:'The way to get started is to quit talking and begin doing',},
    
    {id:2,
     author:'Franklin D. Roosevelt',
    quote:'The only thing we have to fear is fear itself.',},
        
    {id:3,
    author:'Benjamin Franklin',
    quote:'Well done is better than well said.',},
        
    {id:4,
     author:'Aristotle',
     quote:'It is during our darkest moments that we must focus to see the light',},
        
    {id:5,
    author:'Oscar Wilde',
    quote:'Be yourself; everyone else is already taken',},
    ]
   
    const button = document.getElementById('btnQuote')
    const div = document.getElementById('divtext')
    
    function clearAll(){
        div.innerText = ''
    }

    function noMoreQuotes(){
        div.innerText = "You've already showed this quote, please add more quotes."
    }

    let checkArray = []

    button.addEventListener('click', function(){
        clearAll()
        let i = Math.floor(Math.random() * myQuotes.length)
        let newQuote = document.createElement('h1')
        let newAuthor = document.createElement('h3')
        newQuote.innerText = `"${myQuotes[i].quote}"`
        newQuote.classList.add('quote')
        newAuthor.innerText = myQuotes[i].author
        newAuthor.classList.add('author')
        div.append(newQuote)
        newQuote.append(newAuthor)
        checkArray.includes(i) ? noMoreQuotes()  : checkArray.push(i)
        // console.log(checkArray)
        })

const buttonQuote = document.getElementById('addQuoteBtn')
const form = document.getElementById('addQuote')

form.addEventListener('submit', function(e){
    e.preventDefault()
    let inputQuote = document.getElementById('inputQuote').value
    let inputAuthor = document.getElementById('inputAuthor').value
    myQuotes.push({id:myQuotes.length, author: inputAuthor, quote: inputQuote})
    console.log(myQuotes)
})