"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import styles from './login.module.css';
import { useSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Login = () => {
  const session = useSession()
  const router = useRouter()
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);
  
  if (session.status === 'loading') {
     <p>Loading...</p>
  }
  if (session.status === 'authenticated') { 
    router.push("/dashboard")
  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    
    const email = e.target.value;
    const password = e.target.value;

    signIn("credentials", { email, password })
  }

  return (
    <div className={styles.container}>
         <h1 className={styles.title}>{success ? success : "Welcome Back"}</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>
       <form className={styles.form} onSubmit={handleSubmit}>
        
        <input type="email" className={styles.input} placeholder="Email" required />
        <input type="password" className={styles.input} placeholder="Password" required />
        <button className={styles.button}>Login</button>
        {error && error}
      </form>
      <button className={styles.button2 + " " + styles.google} onClick={() => signIn('google')}>
        Login with Google
      </button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/register">
        Create new account
      </Link>
    </div>
  );
};

export default Login;
