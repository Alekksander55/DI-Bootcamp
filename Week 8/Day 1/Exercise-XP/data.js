const users = [
    {
        "name": "Alexander",
        "age": "25",
        "location": "Israel"
    },
    {
        "name": "Muhammad",
        "age": "14",
        "location": "Egypt"
    },
    {
        "name": "Denis",
        "age": "23",
        "location": "France"
    },
    {
        "name": "Enrique",
        "age": "24",
        "location": "Colombia"
    },
    {
        "name": "Lionel",
        "age": "34",
        "location": "Argentina"
    },
    {
        "name": "Muller",
        "age": "56",
        "location": "Germany"
    },
]

const averageAge = () => {
    let sum = 0
    for(let i=0; i<users.length; i++){
        let userAge = users[i].age
        sum = (Number(sum) + Number(userAge))
        
    }
    return sum / users.length
}

export {users, averageAge}