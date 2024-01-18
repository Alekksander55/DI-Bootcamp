import {useState} from 'react'

const Phone = () => {
    const [brand, setBrand] = useState('Samsung')
    const [model, setModel] = useState('Galaxy S20')
    const [color, setColor] = useState('black')
    const [year, setYear] = useState(2020)
    
    function changeColor(){
        setColor('blue')
    }
    return(
        <>
        <h3>My phone is a {brand}</h3>
        <h4>It is a {color} {model} from {year}</h4>
        <button onClick={changeColor}>Change color</button>
        </>
    )
}

export default Phone