import { SignUpComponent } from "../components";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../../utils/useAuth";
import { customToast } from "../../../utils/helper";
import { TOAST_TYPE } from '../../../utils/constants';

const SignUp = () => {
  const router = useRouter();
  const { setUserName } = useAuth();

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "NA",
    isLoggedIn: 1,
  });
  const [error, setError] = useState({});

  useEffect(() => {
    const storedCredentials = localStorage.getItem("credentials");
    if (storedCredentials) {
      const parsedCredentials = JSON.parse(storedCredentials);
      if (parsedCredentials.isLoggedIn === 1) {
        router.push("/jobs");
      }
    }
  }, [useRouter]);

  const handleChange = (key, value) => {
    setUserDetails((prev) => ({ ...prev, [key]: value }));
  };

  const validateForm = () => {
    const errorObj = {};
    if (!userDetails.name.trim().length) {
      errorObj["name"] = "Required";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userDetails.email)) {
      errorObj["email"] = "Invalid Email";
      if (userDetails.email.length == 0) {
        errorObj["email"] = "Required";
      }
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorbj = validateForm();
    if (Object.keys(errorbj).length === 0) {
      setUserName(userDetails.name);
      localStorage.setItem("credentials", JSON.stringify(userDetails));
      customToast("Signed up!", TOAST_TYPE.SUCCESS);
      router.push("/");
    }
  };

  return (
    <SignUpComponent
      userDetails={userDetails}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUp;
