// -------------------------------------
// Exercise 1 : Giphy API
// -------------------------------------


// fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
// .then(((result) => result.json()))
// .then((result) => console.log(result))
// .catch(((error) => console.log(error)))


// const ApiFetch = async () => {
//     try {
//         const fetching = await fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
//     const fetchingJson = await fetching.json()
//     console.log(fetchingJson)
//     } catch (error) {
//         console.log('error in ApiFetch', error)
//     }
    
// }

// ApiFetch()

// -------------------------------------
// Exercise 2 : Giphy API
// -------------------------------------

// const ApiFetchSun = async () => {
//     try {
//         const fetching = await fetch('https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
//     const fetchingJson = await fetching.json()
//     console.log(fetchingJson)
//     } catch (error) {
//         console.log('error in ApiFetch', error)
//     }
    
// }

// ApiFetchSun()

// -------------------------------------
// Exercise 3 : Async Function
// -------------------------------------

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

    // const swapiFetch = async () => {
    //     try {
    //         let fetching = await fetch("https://www.swapi.tech/api/starships/9/")
    //         let fetchJson = await fetching.json()
    //         console.log(fetchJson)
    //     } catch (error) {
    //         console.log('Error in swapiFetch', error)
    //     }
    // }

    // swapiFetch()


// -------------------------------------
// Exercise 4: Analyze
// -------------------------------------

// first the code will console log calling, and after 2 seconds console log the result 'resolved'