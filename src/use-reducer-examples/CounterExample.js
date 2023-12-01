import { useReducer } from "react";
import { counterActions } from "./counterActions";
import { counterReducer } from "./counterReducer";


function CounterExample(){

    let [counter, dispatch] = useReducer(counterReducer, 0)

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={()=>dispatch(counterActions({number:5}).INCREMENT)}>+</button>
            <button onClick={()=>{
                let allAction = counterActions({number:2})
                let incAction = allAction.DECREMENT;
                dispatch(incAction)
                dispatch(incAction)
            }}>-</button>
            <button onClick={()=>{dispatch(counterActions().RESET)}}>RESET</button>
        </>
    )
}

export default CounterExample;