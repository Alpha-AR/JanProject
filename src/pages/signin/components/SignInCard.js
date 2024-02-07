import React from "react";
import { styles } from "./style";
import { Input, Button } from "../../../shared";
import Link from "next/link";

const SignInCard = ({ userDetails, error, handleChange, handleSubmit }) => {
  return (
    <div className={styles.signinBox}>
      <form onSubmit={handleSubmit}>
        <div className="text-xl font-bold my-4 text-center">SIGN IN </div>
        <div className="flex flex-col justify-evenly">
          <Input
            id="text"
            label="Email Address*"
            labelClass={styles.labelText}
            placeholder="user@company.com"
            className={
              error.email || error.text ? "border-red-500 border-2" : ""
            }
            type="text"
            value={userDetails.email}
            handleChange={(event) => handleChange("email", event.target.value)}
          />
          <div className="text-sm text-red-600 "> {error.email} </div>

          <Input
            id="password"
            label="Password*"
            labelClass={styles.labelText}
            placeholder="••••••••"
            className={
              error.password || error.text
                ? "border-red-500 border-2"
                : styles.inputText
            }
            type="password"
            value={userDetails.password}
            handleChange={(event) =>
              handleChange("password", event.target.value)
            }
          />
        </div>
        <div className="text-center pt-2">
          <div className="text-sm text-red-600 mb-2">
            {" "}
            {!error.email ? error.text : ""}{" "}
          </div>
          <Button type="submit" className={styles.button} text="SUBMIT" />
          <div className="mt-2">
            New User?{" "}
            <Link
              href="/SignUp"
              className="text-s text-blue-400 underline underline-offset-5 hover:text-blue-800 "
            >
              Register
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInCard;
