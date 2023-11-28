import { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            Form Data: {JSON.stringify(formData)}
            <br /><br />
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={handleChange} />
            <br /><br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handleChange}/>
            <br /><br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={handleChange} required/>
            <br /><br />
            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default SignupForm;