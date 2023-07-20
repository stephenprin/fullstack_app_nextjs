"use client"

import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import { useSession, signIn } from 'next-auth/react';
import Link from 'next/link';

const Login = () => {
  const session = useSession()
  const router=useRouter()
  
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
       
       <form className={styles.form} onSubmit={handleSubmit}>
        
        <input type="email" className={styles.input} placeholder="Email" required />
        <input type="password" className={styles.input} placeholder="Password" required />
        <button className={styles.button}>Login</button>

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
