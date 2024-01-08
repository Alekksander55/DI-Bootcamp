myObj = [
    {
        "name": "Iphone",
        "price": 500,
        "category": "High-Tech"
},
{
    "name": "Pixel",
    "price": 400,
    "category": "High-Tech"
},
{
    "name": "Fridge",
    "price": 800,
    "category": "Kitchen"
},
{
    "name": "Oven",
    "price": 200,
    "category": "Kitchen"
},
{
    "name": "Dryer",
    "price": 250,
    "category": "Cleaning"
},
]

const showProducts = (name) => {
    for(i=0; i<myObj.length; i++){
        let result = Object.values(myObj[i]).includes(name)
        if(result == true) return console.log('This product exist', myObj[i])
        
    }
}

module.exports = {myObj, showProducts}