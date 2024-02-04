import { SignInComponent } from '../components'
import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AppContext from '../../../contexts/AppContext';
import { wait } from 'next/dist/build/output/log';

const SignIn = () => {

    useEffect(() => { 
        localStorage.setItem('credentials', JSON.stringify({ ...JSON.parse(localStorage.getItem('credentials')), isLoggedIn: 0 }));
        passValueToApp(null);
    }, []);
            

    const { setUserName } = useContext(AppContext);
    const passValueToApp = (value) => setUserName(value);

    // notify("errorObj.email");
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
    // var nammee= '';
    const validateForm = () => {
        const errorObj = {};

        const storedCredentials = localStorage.getItem('credentials');
        const parsedCredentials = storedCredentials ? JSON.parse(storedCredentials) : {};
        if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(userDetails.email)) {
            errorObj["email"] = "Invalid email";
            if ((userDetails.email.length == 0)) {
                errorObj["email"] = "Enter email";
            }
        }

        if (!(userDetails.password.length >= 8)) {
            errorObj["password"] = "Incomplete Password";
        }

        if ((userDetails.email !== parsedCredentials.email || userDetails.password !== parsedCredentials.password)) {
            errorObj["text"] = "Incorrect email or password";
        }
        // console.log("signed in successfully")
        passValueToApp(parsedCredentials.name);
        setError(errorObj);
        return errorObj;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errorbj = validateForm();
        if (Object.keys(errorbj).length === 0) {

            localStorage.setItem('credentials', JSON.stringify({ ...JSON.parse(localStorage.getItem('credentials')), isLoggedIn: 1 }));
            // passValueToApp(nammee);
            // console.log('rrampd')
            wait(2)
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