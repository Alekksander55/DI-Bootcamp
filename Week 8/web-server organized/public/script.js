

const fetchingUsers = async() => {
    const divUsers = document.getElementById('users')
    let fetching = await fetch('http://localhost:3001/users')
    let fetchingJSON = await fetching.json()
    fetchingJSON.forEach(user => {
        console.log(user)
        let userDisplay = document.createElement('div')
        userDisplay.innerHTML = `Name : ${user.name} and Email ${user.email}`
        divUsers.append(userDisplay)    
    });
}

fetchingUsers()
