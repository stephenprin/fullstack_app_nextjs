"use client"
import useSWR from 'swr'
import React from 'react'
import styles from './page.module.css'
import { useSession} from "next-auth/react"
import { useRouter } from 'next/navigation'
import Image from 'next/image'



const Dashboard = () => {
  const session = useSession()
  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, mutate, error, isLoading } = useSWR( `/api/posts?username=${session?.data?.user.name}`, fetcher); 
  
  if (session.status === 'loading') {
    <p>Loading....</p>
    
  }
  // if (session.status === 'unauthenticated') { 
  //   router?.push("/dashboard/login")
  // }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    const title= e.target[0].value
    const description = e.target[1].value
    const img = e.target[2].value
    const content = e.target[3].value
    
    try {

      await fetcher("/api/posts", {
        method: 'POST',
        body: JSON.stringify({
          title,
          description,
          img,
          content,
          username:session.data?.user.name
        })

        
      })
      mutate()
    } catch (error) {
      console.log(error)
    }
  }
  

    if (session.status === 'unauthenticated') { 
      return (
        <div className={styles.container}>
          <div className={styles.posts}>
            {isLoading? "Loading ....": data?.map((post) => (
              <div className={styles.post} key={post.id} >
                  <div className={styles.imgContainer}>
                  <Image src={post.img} alt={post.title} width={300} height={200} className={styles.img} />
            </div>
            <h2 className={styles.postTitle}>{ post.title}</h2>
            <button className={styles.delete}>Delete</button>
              </div>
            ))}
            <p>Page</p>
          </div>
          <form className={styles.new} onSubmit={handleSubmit}>
            <h1>Add New Post</h1>
            <input className={styles.input} placeholder='Titles' type="text" />
            <input className={styles.input} placeholder='Description' type="text" />
            <input className={styles.input} placeholder='Image' type="text" />
           
            <textarea placeholder="Content" className={styles.textArea} cols="30" rows="10"></textarea>
            <button className={styles.button}>Send</button>
          </form>
   </div>
     )
    }
 
  
}

export default Dashboard
