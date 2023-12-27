let client = "Betty";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

displayGroceries = () => groceries.fruits.forEach((fruit) => console.log(fruit))
cloneGroceries = () =>{
    let user = client;
    console.log(user)
    let shopping = groceries;
    groceries.totalPrice = '35$';
    groceries.other.paid = 'false'
    console.log(shopping)
}

// the client is also modified because it's a let
// the groceries wont be modified because it's a const 
cloneGroceries()
