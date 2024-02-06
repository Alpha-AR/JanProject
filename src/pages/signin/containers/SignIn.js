import { SignInComponent } from '../components'
import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../utils/useAuth';
import toast from 'react-hot-toast'

const SignIn = () => {
    useEffect(() => {
        const storedCredentials = localStorage.getItem('credentials');
        if (storedCredentials) {
            const parsedCredentials = JSON.parse(storedCredentials);
            if (parsedCredentials.isLoggedIn === 1) {
                router.push('/jobs');
            }
        }

    }, [useRouter]);

    const { setUserName } = useAuth();
    const passValueToApp = (value) => setUserName(value);
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
        const storedCredentials = localStorage.getItem('credentials');
        const parsedCredentials = storedCredentials ? JSON.parse(storedCredentials) : {};

        const errorObj = {};

        if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(userDetails.email)) {
            errorObj["email"] = "Invalid email";
            if ((userDetails.email.length == 0)) {
                errorObj["email"] = "Required";
            }
        }

        if (!(userDetails.password.length >= 8)) {
            errorObj["password"] = "Incomplete Password";
        }

        if ((userDetails.email !== parsedCredentials.email || userDetails.password !== parsedCredentials.password)) {
            errorObj["text"] = "Incorrect email or password";
        }
        setError(errorObj);
        return errorObj;
    }

    const handleSubmit = (event) => {
        const storedCredentials = localStorage.getItem('credentials');
        const parsedCredentials = storedCredentials ? JSON.parse(storedCredentials) : {};

        event.preventDefault();
        const errorbj = validateForm();
        if (Object.keys(errorbj).length === 0) {
            passValueToApp(parsedCredentials.name);
            localStorage.setItem('credentials', JSON.stringify({ ...JSON.parse(localStorage.getItem('credentials')), isLoggedIn: 1 }));
            router.push('/');
            toast('Signed in!', {
                style: {
                    background: '#A4F3FC', 
                    color: 'black'
                },
              });
        } else {
            console.log(errorbj)
        }
    };
    return (
        <SignInComponent userDetails={userDetails} error={error} handleChange={handleChange} handleSubmit={handleSubmit} />
    );
}
export default SignIn;