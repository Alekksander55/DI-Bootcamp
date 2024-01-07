let form = document.getElementById('gifForm')
let text = document.getElementById('gifText')
let mainDiv = document.getElementById('mainDiv')
let random = Math.floor(Math.random() * 4998)
let deleteAllBtn = document.getElementById('deleteAllBtn')


// form.addEventListener('submit', function(e){
// e.preventDefault()
// console.log(text.value)

// })

form.addEventListener('submit', function(e){
    e.preventDefault()
})

const newGif = async() => {
    try {
        let fetching = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${text.value}&limit=1&offset=${random}`);
        let fetchingJson = await fetching.json()
        let gifUrl = await fetchingJson.data[0].images.original.url
        let div = document.createElement('div')
        mainDiv.append(div)
        let img = document.createElement('img')
        img.setAttribute('src', `${gifUrl}`)
        let btn = document.createElement('button')
        btn.setAttribute('type', 'button')
        btn.innerHTML = `DELETE`
        btn.addEventListener('click', function(){
            div.innerHTML = ''
        })
        div.append(img)
        div.append(btn)
        deleteAllBtn.addEventListener('click', function(){
            mainDiv.innerHTML = ''
        })
        

    } catch (error) {
        console.log('Error in newGif', error)
        
    }
}

