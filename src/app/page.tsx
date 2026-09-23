import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.screen}>
      <Image
        src="/logo.png"
        alt="Finca Capital"
        width={1001}
        height={573}
        priority
        className={styles.logo}
      />
      <p className={styles.message}>Este sitio se encuentra en construcción</p>
    </main>
  );
}
