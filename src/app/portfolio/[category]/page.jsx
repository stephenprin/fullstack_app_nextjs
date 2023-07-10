import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/button/Button'
import Image from 'next/image'
import Design from 'public/images/design.jpg'

const Category = ({ params }) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <h1 className={styles.subTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Netflix Clone</h1>
          <p className={styles.desc}>A Netflix clone is a web application that mimics the features and functionality of the popular streaming service Netflix. A Netflix clone allows users to sign up, log in, browse and search for movies and TV shows, view details about individual titles,
            add titles to their watchlist, and stream content on demand.</p>
          <div className={styles.btns}>
            <Button url="#" text="Live Demo" />
            <Button  url="#" text="Github"/>
          </div>
          
        </div>
        <div className={styles.imgContainer}>
          <Image src={Design} fill={ true} alt="Design" className={styles.image}/>
        </div>
        
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Swift Rider</h1>
          <p className={styles.desc}>Swift Rider is a web application designed for ride-sharing services, allowing drivers to quickly and easily find nearby passengers and vice versa. The app includes features such as real-time
            GPS tracking, in-app messaging, and payment processing</p>
          <div className={styles.btns}>
            <Button url="#" text="Live Demo" />
            <Button  url="#" text="Github"/>
          </div>
          
        </div>
        <div className={styles.imgContainer}>
          <Image src={Design} fill={ true} alt="Design" className={styles.image}/>
        </div>
        
      </div>
    </div>
  )
}

export default Category