import { useEffect, useReducer } from "react";
import { userActions } from "./actions";
import { userReducer } from "./reducers";
import { useDispatch, useSelector } from "react-redux";


function UserOperations() {

    let dispatch = useDispatch()

   let users = useSelector(state=>state.users)

    useEffect(()=>{
        fetch("http://localhost:3001/users").then(res=>res.json())
        .then(resdata=>{
            // dispatch({type:"save", payload:resdata})
            dispatch(userActions(resdata).SAVE)
        })
    }, [])
    

    return (
        <>
            
            <table border={1} >
                <tbody>
                    {
                        users.map((currentUser)=>{
                        
                                return (
                                    <tr>
                                        <td>{currentUser.id}</td>
                                        <td>{currentUser.name}</td>
                                        <td>{currentUser.email}</td>
                                        <td>{currentUser.password}</td>
                                        <td>
                                            <button onClick={()=>{
                                                dispatch(userActions({id:currentUser.id}).DELETE)
                                                // dispatch({type:"delete", payload: {id: 1}})
                                            }}>DELETE</button>
                                        </td>
                                    </tr>
                                )
                            
                        })
                    }
                 </tbody>
            </table>
            
        </>
    )
}

export default UserOperations;