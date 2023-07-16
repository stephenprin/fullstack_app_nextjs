import React from 'react'
import styles from './page.module.css'
import People from 'public/images/people.jpg'
import Image from 'next/image'
import Button from '@/components/button/Button'


export const metadata = {
  title: 'About page',
  description: 'Get to know more about us',
}

const About = () => {
  return (
    <div className={styles.container}>
          <div className={styles.imgContainer}>
              <Image src={People} fill={true} alt="people" className={styles.img} />
              <div className={styles.imgText}>
                  <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                  <p className={styles.imgDes}>Handcrafting award winning digital experience</p>
              </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We?</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia, excepturi. Sequi accusantium itaque error beatae excepturi autem?
                        Soluta dolorem et oluta dolorem et
                        reprehenderit, ea distinctio quis?
                        Atque laboriosam adipisci optio nisi magni?
                        reprehenderit, ea distinctio quis?
                      Atque laboriosam adipisci optio nisi magni?
                      <br/>
                      <br/>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia, excepturi. Sequi accusantium itaque error beatae excepturi autem?
                        Soluta dolorem et oluta dolorem et
                        reprehenderit, ea distinctio quis?
                        Atque laboriosam adipisci optio nisi magni?
                        reprehenderit, ea distinctio quis?
                        Atque laboriosam adipisci optio nisi magni?
                  </p>
              </div>
              <br /> 
              <br />
              <div className={styles.item}>
                    <h1 className={styles.title}>What We Do?</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia, excepturi. Sequi accusantium itaque error beatae excepturi autem?
                      Soluta dolorem et <br /> <br /> - Dynamic web application -Fast and reliable
                      <br /> - Universal - All round the globe
                      <br /> - Fast and Handy -Fast and reliable
                      <br /> - Mobile Apps and Web3
                  </p>
                  <Button url="contact" text="Contact"/>
              </div>
              
          </div>
    </div>
  )
}

export default About
