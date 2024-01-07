const pokemonImg = document.getElementById('pokemonImg')
const pokemonInfo = document.getElementById('pokemonInfo')
const previousBtn = document.getElementById('previousBtn')
const nextBtn = document.getElementById('nextBtn')



const getData = async () => {
    try {
        pokemonImg.innerHTML = ' <div class="spinner-border" role="status"> '
        pokemonInfo.innerHTML = ' Loading...'   
    let random = Math.floor(Math.random() * 1302)
    let fetching = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    let dataJson = await fetching.json()
    let imgUrl = dataJson.sprites.front_default   
    pokemonImg.innerHTML = `<img src=${imgUrl}>`
    let pokemonName = dataJson.name
    let pokemonId = dataJson.id
    let pokemonHeight = dataJson.height
    let pokemonWeight = dataJson.weight
    let pokemonType = dataJson.types[0].type.name
    pokemonInfo.innerHTML = `<h1>${pokemonName}</h1> <br> Pokemon ID : ${pokemonId} <br> Height : ${pokemonHeight*10} cm <br> Weight : ${pokemonWeight/10} Kg <br> Type : ${pokemonType}`

    nextBtn.addEventListener('click', async function(){
        pokemonImg.innerHTML = ' <div class="spinner-border" role="status"> '
        pokemonInfo.innerHTML = ' Loading...'
        let fetching = await fetch(`https://pokeapi.co/api/v2/pokemon/${random++}`)
        let dataJson = await fetching.json()
        let imgUrl = dataJson.sprites.front_default   
        pokemonImg.innerHTML = `<img src=${imgUrl}>`
        let pokemonName = dataJson.name
        let pokemonId = dataJson.id
        let pokemonHeight = dataJson.height
        let pokemonWeight = dataJson.weight
        let pokemonType = dataJson.types[0].type.name
        pokemonInfo.innerHTML = `<h1>${pokemonName}</h1> <br> Pokemon ID : ${pokemonId} <br> Height : ${pokemonHeight*10} cm <br> Weight : ${pokemonWeight/10} Kg <br> Type : ${pokemonType}`
    })

    previousBtn.addEventListener('click', async function(){
        pokemonImg.innerHTML = ' <div class="spinner-border" role="status"> '
        pokemonInfo.innerHTML = ' Loading...'  
        let fetching = await fetch(`https://pokeapi.co/api/v2/pokemon/${random--}`)
        let dataJson = await fetching.json()
        let imgUrl = dataJson.sprites.front_default   
        pokemonImg.innerHTML = `<img src=${imgUrl}>`
        let pokemonName = dataJson.name
        let pokemonId = dataJson.id
        let pokemonHeight = dataJson.height
        let pokemonWeight = dataJson.weight
        let pokemonType = dataJson.types[0].type.name
        pokemonInfo.innerHTML = `<h1>${pokemonName}</h1> <br> Pokemon ID : ${pokemonId} <br> Height : ${pokemonHeight*10} cm <br> Weight : ${pokemonWeight/10} Kg <br> Type : ${pokemonType}`
        
        })


        
    } catch (error) {
        let newError = document.createElement('div')
        newError.innerHTML = '<br> <br> Oh no! That Pokemon isn’t available…'
        pokemonInfo.append(newError)
    }
    
}

