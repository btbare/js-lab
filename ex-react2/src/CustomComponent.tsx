import { useState } from 'react'
import './CustomComponent.css'

function CustomComponent() {

    let temp: number = 100
    const [count, setCount] = useState(0)


    return (
        <>
        <h1>Cutom Component</h1>
        <p>Current Temp: {temp}</p>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count+1)}></button>
        </>
    )

}

export default CustomComponent