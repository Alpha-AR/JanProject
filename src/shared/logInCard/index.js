import React, { useState } from 'react';
import { styles } from './style';

const LogInCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Submitting form with:', email, password);
  };

  return (
  <div className={styles.signinBox}>
      <form onSubmit={handleSubmit} className="w-full items-center ">
      <h2 className="text-xl font-bold my-4">Sign In</h2>
        <div className="mb-4">
          <label htmlFor="email" className={styles.labelText}>
            Email address
          </label>
          <input
            type="email"
            id="email"
            className= {styles.inputText}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className={styles.labelText}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.inputText}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className={styles.button} >
            SUBMIT
        </button>
        </form>
    </div>
  );
};

export default LogInCard;