"use client"

import styles from './login.module.css';
import { useSession, signIn } from 'next-auth/react';

const Login = () => {

  const handleSubmit = (e) => { 
    e.preventDefault();
    
    const email = e.target.value;
    const password = e.target.value;

    signIn("credentials", { email, password })
  }

  return (
    <div className={styles.container}>
       
       <form className={styles.form} onSubmit={handleSubmit}>
        
        <input type="email" className={styles.input} placeholder="Email" required />
        <input type="password" className={styles.input} placeholder="Password" required />
        <button className={styles.button}>Login</button>

      </form>
      <button className={styles.button2} onClick={() => signIn('google')}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
