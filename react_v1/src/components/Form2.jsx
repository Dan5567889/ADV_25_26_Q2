import React, { useState } from "react";
import './Form2.module.css';

function Form2() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitFormHandler = (event) => {
        event.preventDefault();
        console.log(" Email: " + email + " Password: " + password);
        
    };

    return (
        <div >
            <form>
                
                <br/>
                <label> Email </label>
                <input type="email" 
                    name="email" 
                    onChange={(event) => setEmail(event.target.value)} 
                /> 
                <br />
                
                <label> Password </label>
                <input type="text" 
                name="Password" 
                minLength="6"
                required
                onChange={(event) => setPassword(event.target.value)} 
                /> 
                <br />

                <label > Remember Me </label>
                <input type="checkbox" 
                name="Remember Me" 
                /> 
                <br/>

                <button  onSubmit={submitFormHandler} type="submit" > Login </button>
            </form>
        </div>
    );
}

export default Form2;