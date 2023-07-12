import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Design from 'public/images/design.jpg'
import {notFound} from 'next/navigation'



async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
} 

const Blog = async() => {
  const data= await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map((item)=>(
         <Link href='/blog/id' className={styles.container} key={item.id}>
         <div className={styles.imgContainer}>
             <Image src={Design} fill={true} alt="Design" className={styles.image}  />
           </div>
           <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
             <p className={styles.desc}>payment processing</p>
             
           </div>    
         </Link>
      ))}
      

    </div>
  )
}

export default Blog