import { SignInComponent } from '../components'
import React, { useState } from 'react';


const SignIn = () => {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
    });
    
    const [error, setError] = useState({});
    
    const handleChange = (key, value) => {
        setUserDetails(prev => ({ ...prev, [key]: value }));
        
    }
    const validateForm = () => {
        
        const errorObj = {};
        
        if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(userDetails.email)) {
            errorObj["email"] = "Invalid email";
        }
        if (!(userDetails.password.length>=8)) {
            errorObj["password"] = "Incorrect Password";
        }
        
        setError(errorObj);
        return errorObj;
    }
    
    // const errorbj = validateForm();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const errorbj = validateForm();
        if (Object.keys(errorbj).length === 0) {
            console.log("User Details", userDetails);
        } else {
            // errorbj.password = "Incorrect Password";
            console.log(errorbj)
        }
    };
    
    return (
        <SignInComponent  userDetails={userDetails} error={error} handleChange={handleChange} handleSubmit={handleSubmit}/>
    );
}
export default SignIn;