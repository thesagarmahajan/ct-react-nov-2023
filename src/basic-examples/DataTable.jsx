import { useEffect, useState } from "react"

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
                                <tr>
                                    <td>{currentUser.id}</td>
                                    <td>{currentUser.first_name}</td>
                                    <td>{currentUser.last_name}</td>
                                    <td>{currentUser.email}</td>
                                    <td>
                                        <img src={currentUser.avatar} />
                                    </td>
                                    <td>
                                        <button onClick={()=>deleteUser(currentUser.id)}>DELETE</button>
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

export default DataTable;