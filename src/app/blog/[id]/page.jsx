
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Africa from "public/images/africa.jpg";
import Prince from "public/images/prince.jpg";
import {notFound} from 'next/navigation';



async function getData(id) {
  const res = await fetch(`http://localhost:3002/api/posts/${id}`,
  { cache: 'no-store' }
  )

  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}
export async function generateMetadata({ params }) {
  const post= await getData(params.id)
  return {
    title: post.title,
    description: post.description
  }
}

const BlogPost = async({params}) => {
  const data =  await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
           {data.title}
          </h1>
          <p className={styles.desc}>
            {data.content}
          </p>
          <div className={styles.author}>
            <Image
              src={Prince}
              alt="prince"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.userName }</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={Africa}
            alt="africa"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {data.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
