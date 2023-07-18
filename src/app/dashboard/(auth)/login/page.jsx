"use client"

import styles from './login.module.css';
import { useSession, signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => signIn('google')}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
