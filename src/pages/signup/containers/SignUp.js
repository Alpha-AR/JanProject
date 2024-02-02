import { SignUpComponent } from '../components'
import React, { useState } from 'react';
import { useRouter } from 'next/router';


const SignUp = () => {
    const router = useRouter();
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        isLoggedIn: 0
    });
    const [error, setError] = useState({});

    const handleChange = (key, value) => {
        setUserDetails(prev => ({ ...prev, [key]: value }));
    // const errorbj = validateForm();
    }

    const validateForm = () => {
        const errorObj = {};
        if (!userDetails.name.trim().length) {
            errorObj["name"] = "Enter Name";
        }
        if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(userDetails.email)) {
            errorObj["email"] = "Enter a proper email";
        }
        if (!(userDetails.password.length>=8)) {
            errorObj["password"] = "Enter an 8-character password";
        }
        if (!(userDetails.password === userDetails.confirmPassword)) {
            errorObj["confirmPassword"] = "Passwords do not match";
        }
        setError(errorObj);
        return errorObj;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const errorbj = validateForm();
        if (Object.keys(errorbj).length === 0) {
            // userDetails.isLoggedIn=1;
            console.log("User Details", userDetails);
            localStorage.setItem('credentials', JSON.stringify(userDetails))
            router.push('/')
        } else {
            console.log(errorbj)
        }
    };

    return (
        <SignUpComponent userDetails={userDetails} error={error} handleChange={handleChange} handleSubmit={handleSubmit} />
    );
}

export default SignUp;