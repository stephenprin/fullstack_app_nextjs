'use client'
import React from 'react'
import links from "@/utils/data"
import Link from 'next/link'
import styles from './navbar.module.css'
import DarkModeToggle from '../darkMode/DarkModeToggle'

const Navbar = () => {
  return (
      <div className={ styles.container}>
          <Link href="/dashboard" className={ styles.logo}>Insomia</Link>
          <div className={ styles.links}>
              {links.map((link) => (
                  <Link href={link.url} key={link.id} className={styles.link}>
                      {link.title}
                  </Link>
                 
              ))}
              <button className={styles.logout} onClick={() => console.log("Logout ")}>Logout</button>
              <DarkModeToggle/>
          </div>
          
          
    </div>
  )
}

export default Navbar