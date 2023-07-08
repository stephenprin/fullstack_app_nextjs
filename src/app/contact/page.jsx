import React from 'react'
import styles from './page.module.css'
import ContactForm from 'public/images/contact.png' 
import Button from '@/components/button/Button'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Let's Keep iin Touch</div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>

          <Image src={ ContactForm} alt="contact" fill={true} className={styles.image } />

        </div>
        <form className={styles.form}>
          <input type="text" className={styles.input} placeholder="Name" />
          <input type="text" className={styles.input} placeholder="Email" />
          <textarea className={styles.textarea} placeholder="Message" cols='30' rows='10' />
          <Button url="#" text='Send' />
        </form>
       </div>

    </div>
  )
}

export default Contact