import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import {BsFacebook, BsTwitter, BsLinkedin,BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
      <div className={styles.container}>
          <div>@ 2023 Isomia. All rights reserved</div>
          <div className={styles.social}>
              <Link href="https://facebook.com"><BsFacebook size={22} /></Link>
              <Link href="https://twitter.com"><BsTwitter size={22}/></Link>
              <Link href="https://linkedln.com"><BsLinkedin size={22}/></Link>
              <Link href="https://instagram.com"><BsInstagram size={22}/></Link>
          </div>
    </div>
  )
}

export default Footer