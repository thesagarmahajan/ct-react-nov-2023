import { useEffect, useState, useTransition } from "react"
import UserRow from "./UserRow"

function DataTable2() {

    let [users, setUsers] = useState([])  
    let [updatFormVisible, setUpdateFormVisible] = useState("hidden")
    let [userToUpdate, setUserToUpdate] = useState({
        id:0,
        name:"",
        email:"",
        password:""
    })

    // https://reqres.in/api/users
    let deleteUser = (index)=>{
        // 1,3,4,5,6
        // 1,3,4,5,6

        let filteredUsers = users.filter(currentUser=>currentUser.id!=index)
        
        let deletePromise = fetch(`http://localhost:3001/users/${index}`,
            {
                "Headers": {
                    "content-type": "application/json"
                },
                method: "DELETE"
            })
        deletePromise.then((res) => console.log("DELETED"))
        
        setUsers(filteredUsers)

    }

    let handleUpdateClick = (tempUser) => {
        setUserToUpdate(tempUser)
        setUpdateFormVisible("visible")
    }


    // Hook
    useEffect(()=>{
        let fetchPromise = fetch("http://localhost:3001/users")
        fetchPromise.then((res)=>res.json()).then(resdata=>{
             setUsers(resdata)
            console.log(users)
        })
        // OR
        fetchPromise.catch(()=>{
            console.log("Some error occured")
        })
    }, [])

    let handleUpdateFormChange = (e) => {
        setUserToUpdate({...userToUpdate, [e.target.name]: e.target.value})
    }

    let handleUpdateFormSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/users/${userToUpdate.id}`, {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(userToUpdate)
        }).then(res=>alert("Updated"))
    }

    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((currentUser)=>{
                            return (
                               <tr>
                                <td>{currentUser.id}</td>
                                <td>{currentUser.name}</td>
                                <td>{currentUser.email}</td>
                                <td>
                                    <button type="button" onClick={()=>handleUpdateClick(currentUser)}>Update</button>
                                    <button type="button" onClick={()=>deleteUser(currentUser.id)}>Delete</button></td>
                                
                               </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>

            <form onSubmit={handleUpdateFormSubmit} style={{visibility:updatFormVisible}}>
                <h1>Update Form</h1>
                <button onClick={()=>setUpdateFormVisible("hidden")}>X</button>
                <br /><br />
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={userToUpdate.name} onChange={handleUpdateFormChange} />
                <br /><br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={userToUpdate.email} onChange={handleUpdateFormChange}/>
                <br /><br />
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" name="password" value={userToUpdate.password} onChange={handleUpdateFormChange} required/>
                <br /><br />
                <button type="submit">SUBMIT</button>
            </form>
        </>
    )
}

export default DataTable2;