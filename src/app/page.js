import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
     
      
       <nav className={styles.navbar}>
      <ul className={styles.navbarMenu}>
        <li><Link href={"/projet"} className={styles.navbarLink}>Projet</Link></li>
        <li><Link href={"/competence"} className={styles.navbarLink}>compétences</Link></li>
      
        <li><Link href={"/contact"} className={styles.navbarLink}>Contact</Link></li>
      </ul>
    </nav>

    <Image
      src="/avatar.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
     <h1 className={styles.portfolio}>Mon Portfolio</h1>
  </main>
    </div>
  );
}
