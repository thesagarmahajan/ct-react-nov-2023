import { useRef, useState } from "react";

function SignupFormUncontrolled(){

    // Controlled Form Component

    let [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    let nameRef = useRef()
    let emailRef = useRef()
    let passwordRef = useRef()

    let handleSubmit = (e) => {
        e.preventDefault()
        let tempData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        setFormData(tempData)
    }

    return (
        <form onSubmit={handleSubmit}>
            Form Data Uncontrolled: {JSON.stringify(formData)}
            <br /><br />
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" ref={nameRef}/>
            <br /><br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" ref={emailRef}/>
            <br /><br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required ref={passwordRef}/>
            <br /><br />
            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default SignupFormUncontrolled;