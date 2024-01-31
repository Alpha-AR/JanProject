// import React from 'react';
import { styles } from './style';
import Input from '../../../shared/Input';
import Button from '../../../shared/Button';
import Dropdown from '../../../shared/Dropbox';

const SignUpCard = ({ userDetails, error, handleChange, handleSubmit }) => {
  return (
    <div className={styles.signUpBox}>
      <form onSubmit={handleSubmit} className="w-full items-center">
        <h2 className="text-xl font-bold my-4 text-center">SIGN UP</h2>
        <Input
          id='name'
          label={error.name ? error.name : 'Name'} 
          labelClass={error.name ? 'text-red-500' : styles.labelText} 
          className={styles.inputText}
          type='text'
          required={true}
          value={userDetails.name}
          handleChange={(event) => handleChange("name", event.target.value)}
        />

        <Input
          id='email'
          label={error.email ? error.email : 'Email Address'} 
          labelClass={error.email ? 'text-red-500' : styles.labelText} 
          className={styles.inputText}
          type='email'
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

        <Input
          id='confirmPassword'
          label={error.confirmPassword ? error.confirmPassword : 'Confirm Password'} 
          labelClass={error.confirmPassword ? 'text-red-500' : styles.labelText} 
          className={styles.inputText}
          type='password'
          value={userDetails.confirmPassword}
          handleChange={(event) => handleChange("confirmPassword", event.target.value)}
        />
        <Dropdown
          id="gender"
          label={error.gender ? error.gender : 'Gender'} 
          labelClass={error.gender ? 'text-red-500' : styles.labelText} 
          className={styles.inputText}
          value={userDetails.gender}
          handleChange={(event) => handleChange("gender", event.target.value)}
        />

        <Button
          type="submit"
          className={styles.button}
          text="REGISTER"
        />
      </form>
    </div>
  );
};

export default SignUpCard;
