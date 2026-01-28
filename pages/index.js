import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>
          Hi I'm <strong>Ritvik</strong>!
          I'm a student at the University of Illinois Urbana-Champaign majoring in Computer Engineering. 
        </p>
      </section>
      Please find my resume linked here: <Link href="/cv.pdf" target='_blank'>(CV)</Link>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.projects}>
          <li className={utilStyles.projectsitem}>
            <Link href="/projects/iem">Illini Electric Motorsports</Link>
          </li>
          <li className={utilStyles.projectsitem}>
            <Link href="/projects/millburnrobotics">Millburn Robotics</Link>
          </li>
          <li className={utilStyles.projectsitem}>
            <Link href="/projects/gsa">Garden State Alliance</Link>
          </li>
          <li className={utilStyles.projectsitem}>
            <Link href="/projects/cellularinfill">Cellular Infill</Link>
          </li>
          <li className={utilStyles.projectsitem}>
            <Link legacyBehavior href="/projects/boids">
              <a>Guiding Boids</a>
            </Link>
          </li>
          <li className={utilStyles.projectsitem}>
            <Link href="/projects/branchly">Branchly</Link>
          </li>
          <li className={utilStyles.projectsitem}>
            <Link href="/projects/spot">Spot Payload</Link>
          </li>
          <li className={utilStyles.projectsitem}>
            <Link legacyBehavior href="/projects/kiosks">
              <a>Kiosks</a>
            </Link>
          </li>
          <li className={utilStyles.projectsitem}>
            <Link href="/projects/signsensei">SignSensei</Link>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd}`}>
        <h2 className={utilStyles.headingLg}>Thoughts</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem} key={allPostsData[0].id}>
            <Link href={`/posts/${allPostsData[0].id}`}>{allPostsData[0].title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={allPostsData[0].date} />
            </small>
          </li>
          <li className={utilStyles.listItem} key={allPostsData[1].id}>
            <Link href={`/posts/${allPostsData[1].id}`}>{allPostsData[1].title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={allPostsData[1].date} />
            </small>
          </li>
          <li className={utilStyles.listItem} key={allPostsData[2].id}>
            <Link href={`/posts/${allPostsData[2].id}`}>{allPostsData[2].title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={allPostsData[2].date} />
            </small>
          </li>
        </ul>
        <Link href="/thoughts">see more →</Link>
      </section>
    </Layout>
  );
}
