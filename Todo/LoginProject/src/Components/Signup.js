import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";

const Signup = ()=>{
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    async function handleSignup(){
        const username = nameRef.current.value;
        const password = passwordRef.current.value;

        try{
            const response = await axios.post("http://localhost:4000/register", {name: username, password: password});
            console.log("User registered successfully");
        }catch(error) {
            console.error("Error registering user:", error);
        }
    };

    const handleLogin = () => {
        navigate("/");
    }

    return (
        <div id="loginCard" className = "loginCard">
            <h1>Sign Up</h1>
            <div id="inputs" className="inputs">
                <input placeholder="Enter your name" className="nameInput" type="text" ref={nameRef} />
                <input placeholder="Enter your password" className="passwordInput" type="password" ref={passwordRef} />
            </div>
            <div className="buttons">
                <button className="login" onClick={handleLogin}>Login</button>
                <button className="signup" onClick={handleSignup}>SignUp</button>
            </div>
        </div>
    )
}

export default Signup;
