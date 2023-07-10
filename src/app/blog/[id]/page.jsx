import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Africa from "public/images/africa.jpg";
import Prince from "public/images/prince.jpg";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
            corporis praesentium deserunt numquam, placeat ratione dolor
            blanditiis quia doloribus hic quod quaerat voluptatibus assumenda
            sunt incidunt quidem unde illo perspiciatis quos omnis officia.
            Officia, nostrum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo dolores culpa? Quos minus animi maxime nesciunt accusamus aspernatur explicabo.
          </p>
          <div className={styles.author}>
            <Image
              src={Prince}
              alt="prince"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Prince Nmezi</span>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime impedit corporis, blanditiis incidunt,
          deserunt soluta vero adipisci sequi dolorem, consequuntur minima voluptas accusantium ipsa
          doloremque nesciunt similique cupiditate natus nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur rerum eius minus aut consequuntur.
          <br />
          Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Laudantium molestiae nemo rem quod, soluta beatae minima delectus quisquam, sed magnam omnis
          qui laboriosam eos ullam numquam ducimus amet ipsa, quaerat nihil reiciendis. Architecto, aut recusandae.
          <br /><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quod harum provident cupiditate nisi dolor nihil tenetur, unde perferendis a officiis alias corporis excepturi aspernatur vitae culpa dolorem animi. Fuga eligendi, nihil error tenetur doloremque doloribus obcaecati
          odio architecto quia enim amet quasi, molestiae dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fugit soluta dolore, explicabo tenetur dolorem mollitia porro laborum. Porro tempore voluptates nihil saepe assumenda iste alias voluptatibus, vero, voluptatum aliquid maiores incidunt magni cumque ad accusantium omnis sint laudantium praesentium eligendi ut voluptatem. At voluptates odio voluptatum quod adipisci unde.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
