let random = Math.floor(Math.random()*81)
let div = document.getElementById('contentDiv')
let btn = document.getElementById('findSomeoneBtn')

const getPeople = async() =>{
    try { 
        console.log('Beginning..')
        div.innerHTML = '<center><br><div class="spinner-border" style="width: 3rem; height: 3rem;" role="status"></div>  <span><br><br>Loading...</span> </center>'
        let random = Math.floor(Math.random()*81)
        let fetchingPeople = await fetch(`https://www.swapi.tech/api/people/${random}`)
        let fetchingJson = await fetchingPeople.json()
        let charInfoArray = Object.values(fetchingJson.result.properties)
        let fetchPlanets = await fetch(`${charInfoArray[10]}`)
        let fetchingJson1 = await fetchPlanets.json()
        let charPlanet = Object.values(fetchingJson1.result.properties)
        console.log('Information Loaded')
            console.log('Displaying information')
            div.innerHTML = `<center> <h2> ${charInfoArray[9]}<h2/> <br>Height:  <b>${charInfoArray[0]} cm</b> <br> Gender: <b> ${charInfoArray[6]}</b> <br> Birth Year:  <b>${charInfoArray[5]}</b> <br> Home World: <b> ${charPlanet[10]}</b></center> `
    
    
    } catch (error) {
        console.log('Error in getPeople', error)
        div.innerHTML = 'Oh no ! That person is not available.'
    }
    
}
