import { SignInComponent } from '../components'
import React, { useState } from 'react';
import { useRouter } from 'next/router';


const SignIn = () => {
    const router = useRouter();
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
        text: ""
    });
    const [error, setError] = useState({});
    const handleChange = (key, value) => {
        setUserDetails(prev => ({ ...prev, [key]: value }));

    }
    const validateForm = () => {
        const errorObj = {};

        const storedCredentials = localStorage.getItem('credentials');
        const parsedCredentials = storedCredentials ? JSON.parse(storedCredentials) : {};
        // JSON.parse(localStorage.getItem('credentials')).name
        if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(userDetails.email)) {
            errorObj["email"] = "Invalid email";
        }

        if (!(userDetails.password.length >= 8)) {
            errorObj["password"] = "Incorrect Password";
        }

        if ((userDetails.email !== parsedCredentials.email || userDetails.password !== parsedCredentials.password)) {
            errorObj["text"] = "Please Retry";
        }
        // console.log("signed in successfully")

        setError(errorObj);
        return errorObj;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errorbj = validateForm();
        if (Object.keys(errorbj).length === 0) {
            localStorage.setItem('credentials', JSON.stringify({ ...JSON.parse(localStorage.getItem('credentials')), isLoggedIn: 1 }));
            router.push('/');
        } else {
            console.log(errorbj)
        }
    };
    return (
        <SignInComponent userDetails={userDetails} error={error} handleChange={handleChange} handleSubmit={handleSubmit} />
    );
}
export default SignIn;