import React, { useState } from 'react';
import { styles } from './style';
import Input from '../../../shared/Input';
import Link from 'next/link';
import Button from '../../../shared/Button';
// impo
// import { CRED } from '../../../utils/constants';

const SignInCard = ( { userDetails, error, handleChange, handleSubmit }) => {


  return (
    <div className={styles.signinBox}>
      <form onSubmit={handleSubmit} >
        <div className="text-xl font-bold my-4 text-center">SIGN IN </div>
        <div className='flex flex-col justify-evenly'>
          <div>
            <Input
              id='email'
              label={error.email ? error.email : 'Email Address'}
              labelClass={error.email ? 'text-red-500' : styles.labelText}
              className={styles.inputText}
              type='text'
              value={userDetails.email}
              handleChange={(event) => handleChange("email", event.target.value)}
            />

            <Input
              id='password'
              label={error.password ? error.password : 'Password'}
              labelClass={error.password ? 'text-red-500' : styles.labelText}
              className={styles.inputText}
              type='password'
              value={userDetails.password}
              handleChange={(event) => handleChange("password", event.target.value)}
            />

          </div>
          <div className='text-center pt-2'>
            <Button
              type="submit"
              className={styles.button}
              // disabledText={!(isEmailValid && isPasswordValid)}
              text="SUBMIT"
            />
            <text className='text-s text-gray-600'> New User?  </text>
            <Link href="/signup" className='text-s text-blue-400 underline underline-offset-5 hover:text-blue-800'>
              Register
            </Link>

          </div>
        </div>
      </form>
    </div >
  );
};

export default SignInCard;
