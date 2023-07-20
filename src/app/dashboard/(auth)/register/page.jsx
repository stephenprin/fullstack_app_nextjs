"use client"
import React, { useState } from 'react'
import styles from "./register.module.css"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
  const [err, setError] = useState(false)
  
  const router=useRouter()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
     try {

       const res = await fetch("/api/auth/register", {
         method: "POST",
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify({
           name,
           email,
           password
         }),
       });
       res.status === 201 && router.push("/dashboard/login?success=Account has been created successfully")
      
     } catch (error) {
      setError(true)
     }
    
  }
  return (
    <div className={styles.container}>
     
        <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" className={styles.input} placeholder="Username" required/>
        <input type="email" className={styles.input} placeholder="Email" required />
        <input type="password" className={styles.input} placeholder="Password" required />
        <button className={styles.button}>Register</button>

      </form>
      
      <div className={styles.error}>
        {err && err.message}
      </div>
    

      <Link href="/dashboard/login" className={styles.log}>Login with an existing account</Link>

    </div>
  )
}

export default Register