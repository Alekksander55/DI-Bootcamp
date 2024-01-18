import { useState, useEffect } from "react";

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState('red')

    useEffect(()=> {
        
        setFavoriteColor('yellow')
        alert('useEffect reached')}, [])

    function changeColor(){
        setFavoriteColor('blue')
    }
    return(
        <>
        <h2>My Favorite Color is {favoriteColor}</h2>
        <button onClick={changeColor}>Change to blue</button>
        </>
        
    )
    
}

export default Color