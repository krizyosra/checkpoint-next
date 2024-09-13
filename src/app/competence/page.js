import Image from 'next/image'
import React from 'react'
import styles from "./competence.module.css";

function page() {
  return (
    <div className={styles.photo}>
     <Image
      src="https://cdn.oshara.ca/wpsite/2023/03/19032151/developpement-web.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
<Image
      src="https://www.tech-connect.info/wp-content/uploads/developpement-applications-Android-660x330.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />

<Image
      src="https://cdn.oshara.ca/wpsite/2023/03/19032151/developpement-web.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />

<Image
      src="https://www.tech-connect.info/wp-content/uploads/developpement-applications-Android-660x330.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div>
    
  )
}

export default page
