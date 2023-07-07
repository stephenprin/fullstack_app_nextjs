import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/images/hero.png'

export default function Home() {
  return (
    <div className={styles.container }>
      <div className={styles.item}>
        <h1 className={styles.title}>Enhance the design of your digital product </h1>
        <p className={styles.description}>Turning your idea into Reality. We bring together the teams from the global tech industry</p>
        <button className={styles.btn}>See Our Works</button>
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt='hero' className={styles.img } />
      </div>
    
    </div>
  )
}
