import { useEffect, useState } from "react"
import UserRow from "./UserRow"

function DataTable() {

    let [users, setUsers] = useState([])  


    // https://reqres.in/api/users
    let deleteUser = (index)=>{
        // 1,3,4,5,6
        // 1,3,4,5,6
        let filteredUsers = users.filter(currentUser=>currentUser.id!=index)
        console.log(filteredUsers)
        setUsers(filteredUsers)
    }


    // Hook
    useEffect(()=>{
        let fetchPromise = fetch("https://reqres.in/api/users")
        fetchPromise.then((res)=>res.json()).then(resdata=>{
             setUsers(resdata.data)
            console.log(users)
        })
        // OR
        fetchPromise.catch(()=>{
            console.log("Some error occured")
        })
    }, [])

    

    return (
        <>
            <h1>Active Users</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((currentUser)=>{
                            return (
                               <UserRow id={currentUser.id} first_name={currentUser.first_name} last_name={currentUser.last_name} email={currentUser.email} avatar={currentUser.avatar} deleteUser={deleteUser} />

                            )
                        })
                    }
                    
                </tbody>
            </table>
        </>
    )
}

export default DataTable;