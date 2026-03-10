import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { AiOutlineGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';

const name = 'Ritvik';
export const siteTitle = "Ritvik";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/pfp.jpg" />
        <title>{siteTitle}</title>
      </Head>
      
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navName}>{name}</Link>
          <ul className={styles.navLinks}>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/writing">Writing</Link></li>
          </ul>
        </nav>
        <main className={styles.main}>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/writing">← Back to writing</Link>
          </div>
        )}
        <div className={styles.socials}>
          <a href="https://github.com/ritvikg4" target="_blank"><AiOutlineGithub /></a>
          <a href="https://www.youtube.com/channel/UC1yCGQaEkfsrulmjq4FT6JQ" target="_blank"><AiFillYoutube /></a>
          <a href="https://www.linkedin.com/in/ritvikgupta11/" target="_blank"><AiFillLinkedin /></a>
        </div>
        <div className={styles.copyright}>
          © 2026 Ritvik Gupta
        </div>
      </div>
    </>
  );
}
