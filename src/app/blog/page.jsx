import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Design from 'public/images/design.jpg'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href='/blog/id' className={styles.container}>
      <div className={styles.imgContainer}>
          <Image src={Design} fill={true} alt="Design" className={styles.image}  />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Swift Rider</h1>
          <p className={styles.desc}>payment processing</p>
          
        </div>    
      </Link>
      <Link href='/id' className={styles.container}>
      <div className={styles.imgContainer}>
          <Image src={Design} fill={true} alt="Design" className={styles.image}  />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Swift Rider</h1>
          <p className={styles.desc}>payment processing</p>
          
        </div>    
      </Link>
      <Link href='/id' className={styles.container}>
      <div className={styles.imgContainer}>
          <Image src={Design} fill={true} alt="Design" className={styles.image}  />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Swift Rider</h1>
          <p className={styles.desc}>payment processing</p>
          
        </div>    
      </Link>

    </div>
  )
}

export default Blog