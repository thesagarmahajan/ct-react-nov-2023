import { useState } from "react";

function Counter() {

    let [count, setCount] = useState(0)
    // let count = 0;
    let handleButtonClick = ()=>{
        setCount(count+1)
        console.log(count)
    }

    let handleDecrement =()=>{
        if(count > 0){
            setCount(count-1)
        }
        else
            alert ("Values reached to 0")
        
    }

    let handleReset =()=>{
        setCount(0)
    }

    return (
        <div>
            <h1>Current Count = {count}</h1>
            <button onClick={()=>handleButtonClick()}>+</button>
            <button onClick={()=>handleDecrement()}>-</button>
            <button onClick={()=>handleReset()}>Reset</button>
            
        </div>
    )
}

export default Counter;