// import React from 'react';
import { styles } from './style';
import Input from '../../../shared/Input';
import Button from '../../../shared/Button';
import Dropdown from '../../../shared/Dropbox';

const SignUpCard = ({ userDetails, error, handleChange, handleSubmit }) => {
  const options = [ 
    { value: 'na', label: 'Prefer Not to Say'},
    { value: 'm', label: 'Male'},
    { value: 'f', label:'Female'},
    { value: 't', label: 'Trans'},
    { value: 'o', label: 'Other'}
  ];
  return (

    <div className={styles.signUpBox}>
      <form onSubmit={handleSubmit} className="w-full items-center">
        <h2 className="text-xl font-bold my-4 text-center">SIGN UP</h2>
        <Input
          id='name'
          label=" Name*" 
          labelClass={styles.labelText}
          placeholder= 'John Doe'
          className={error.name ? " border-red-700 border-2 " : ''}
          type='text'
          required={true}
          value={userDetails.name}
          handleChange={(event) => handleChange("name", event.target.value)}
        />
        <div className="text-sm text-red-600 mb-2"> {error.name} </div>
        <Input
          id='email'
          label='Email Address*'
          labelClass={styles.labelText}
          placeholder='user@company.com'
          className={error.email ? 'border-red-700 border-2  ' : ''}
          type='text'
          value={userDetails.email}
          handleChange={(event) => handleChange("email", event.target.value)}
        />
        <div className="text-sm text-red-600 mb-2"> {error.email} </div>

        <Input
          id='password'
          label='Password*'
          labelClass={styles.labelText}
          placeholder={'••••••••'}
          className={error.password ? 'border-red-700 border-2 ' : ''}
          type='password'
          value={userDetails.password}
          handleChange={(event) => handleChange("password", event.target.value)}
        />
        <div className="text-sm text-red-600 mb-2"> {error.password} </div>

        <Input
          id='confirmPassword'
          label='Confirm Password*'
          placeholder={'••••••••'}
          labelClass={styles.labelText}
          className={error.confirmPassword ? 'border-red-700 border-2 ' : ''}
          type='password'
          value={userDetails.confirmPassword}
          handleChange={(event) => handleChange("confirmPassword", event.target.value)}
        />
        <div className="text-sm text-red-600 mb-2"> {error.confirmPassword} </div> 

        <Dropdown
          options={options}
          id="gender"
          label='Gender'
          labelClass={styles.labelText}
          className={error.gender ? 'border-red-700 border-2  ' : ' '}
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
