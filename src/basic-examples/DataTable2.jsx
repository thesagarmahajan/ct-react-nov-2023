import { useEffect, useState, useTransition } from "react"
import UserRow from "./UserRow"
import { Table, Button, Modal, Form } from "react-bootstrap"

function DataTable2() {

    let [users, setUsers] = useState([])  
    let [modalVisibility, setModalVisibility] = useState(false)
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
        setModalVisibility(true)
        setUserToUpdate(tempUser)
    }

    let getUsersData = () => {
        let fetchPromise = fetch("http://localhost:3001/users")
        fetchPromise.then((res)=>res.json()).then(resdata=>{
             setUsers(resdata)
            console.log(users)
        })
        // OR
        fetchPromise.catch(()=>{
            console.log("Some error occured")
        })
    }

    // Hook
    useEffect(()=>{
        getUsersData();   
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
        }).then(res=>{
            setModalVisibility(false);
            // getUsersData();

            let updatedUsers = users.map(currentUser=>{
                if(currentUser.id==userToUpdate.id){
                    currentUser = userToUpdate
                    return currentUser
                }
                return currentUser
            })
            
            setUsers(updatedUsers)
            alert("Updated")
        })
    }

    return (
        <>
            <h1>Users List</h1>
            <Table border={1}>
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
                                    <Button type="button"  onClick={()=>handleUpdateClick(currentUser)}>Update</Button>
                                    <Button type="button" variant="danger"  onClick={()=>deleteUser(currentUser.id)}>Delete</Button></td>
                                
                               </tr>
                            )
                        })
                    }
                    
                </tbody>
            </Table>

            <Modal show={modalVisibility} onHide={()=>setModalVisibility(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Update Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUpdateFormSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="name">Name:</Form.Label>
                            <Form.Control type="text" id="name" name="name" value={userToUpdate.name} onChange={handleUpdateFormChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email:</Form.Label>
                            <Form.Control type="email" id="email" name="email" value={userToUpdate.email} onChange={handleUpdateFormChange}/>
                        </Form.Group>
                        <Form.Group>
                        <Form.Label htmlFor="password">Password:</Form.Label>
                        <Form.Control type="text" id="password" name="password" value={userToUpdate.password} onChange={handleUpdateFormChange} required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">SUBMIT</Button>
                    </Form>
                </Modal.Body>
            </Modal>
            
        </>
    )
}

export default DataTable2;