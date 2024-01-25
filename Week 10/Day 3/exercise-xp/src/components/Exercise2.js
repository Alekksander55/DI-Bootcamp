import {useRef, useState} from 'react'

const Exercise2 = ( props) => {
    const counter = useRef()
    const [count, setCount] = useState(0)
    

    return(
        <>
        <h3> Character Counter : {count}</h3>
        <input type='text' placeholder='Please type something' ref={counter} onChange={()=>setCount(counter.current.value.length)}/>
        </>
    )
}

export default Exercise2