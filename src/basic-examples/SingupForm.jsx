import { useState } from "react";
import {Form, Button, Container} from "react-bootstrap"
function SignupForm(){

    // Controlled Form Component

    let [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    let handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        let fetchPromise = fetch("http://localhost:3001/users", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        // 200-299
        fetchPromise.then(res=>alert("Data Insterted Successfully"))
        fetchPromise.catch(err=>{
            alert("Some Error")
            console.log(err)
        })
    }

    return (
        <Container>
            <h1>Signup Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="name">Name:</Form.Label>
                    <Form.Control type="text" id="name" name="name" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="email">Email:</Form.Label>
                    <Form.Control type="email" id="email" name="email" onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="password">Password:</Form.Label>
                    <Form.Control type="password" id="password" name="password" onChange={handleChange} required/>
                </Form.Group>
                <Button type="submit">SUBMIT</Button>
            </Form>
        </Container>
    )
}

export default SignupForm;