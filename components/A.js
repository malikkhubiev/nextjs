import Link from "next/link";
import styles from '../styles/A.module.css'
export default function A({ href, text }) {
  return (
    <Link href={href}>
      <span className={styles.linka}>{text}</span>

    </Link>
  );
}
