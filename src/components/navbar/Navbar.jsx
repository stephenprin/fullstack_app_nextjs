'use client'
import React from 'react'
import links from "@/utils/data"
import Link from 'next/link'
import styles from './navbar.module.css'
import DarkModeToggle from '../darkMode/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
    const session = useSession();
  return (
      <div className={ styles.container}>
          <Link href="/dashboard" className={ styles.logo}>Insomia</Link>
          <div className={ styles.links}>
              {links.map((link) => (
                  <Link href={link.url} key={link.id} className={styles.link}>
                      {link.title}
                  </Link>
                 
              ))}
              {
                  session.status === 'authenticated' &&   <button className={styles.logout} onClick={signOut}>Logout</button>
              }
            
              <DarkModeToggle/>
          </div>
          
          
    </div>
  )
}

export default Navbar