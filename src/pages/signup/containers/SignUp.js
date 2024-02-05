import { SignUpComponent } from '../components'
import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AppContext from '../../../contexts/AppContext';
import toast from 'react-hot-toast';

const SignUp = () => {

    useEffect(() => {
        const storedCredentials = localStorage.getItem('credentials');
        if (storedCredentials) {
            const parsedCredentials = JSON.parse(storedCredentials);
            if (parsedCredentials.isLoggedIn === 1) {
                router.push('/jobs'); 
            }
        }
       
    }, [useRouter]); 

    const router = useRouter();
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "na",
        isLoggedIn: 1
    });

    const [error, setError] = useState({});

    const handleChange = (key, value) => {
        setUserDetails(prev => ({ ...prev, [key]: value }));
    }
    const { setUserName } = useContext(AppContext);
    const passValueToApp = (value) => setUserName(value);

    const validateForm = () => {
        const errorObj = {};
        if (!userDetails.name.trim().length) {
            errorObj["name"] = "Required";
        }
        if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(userDetails.email)) {
            errorObj["email"] = "Required";
        }
        if (!(userDetails.password.length >= 8)) {
            errorObj["password"] = "Enter an 8-digit password";
            if (userDetails.password.length == 0) {
                errorObj["password"] = "Required";
            }
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
            passValueToApp(userDetails.name);
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