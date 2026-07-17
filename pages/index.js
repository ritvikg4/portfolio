import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { getAllProjectsData } from '../lib/projects';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allProjectsData = getAllProjectsData();
  return {
    props: {
      allPostsData,
      allProjectsData,
    },
  };
}

export default function Home({ allPostsData, allProjectsData }) {
  return (
    <Layout home>
      <div className={utilStyles.hero}>
        <p>
          <strong>Computer Engineering @ UIUC</strong>, expected Dec 2028. Concentrations in Electrical Hardware and Computer Architecture.<br />
          <strong>Intern @ Rivian</strong>, working on Low Voltage Electronics for R2 (launching mid-2026).<br />
          <strong>Circuit Design @ Illini Electric Motorsports</strong>, leading development of driver electronics.
        </p>
      </div>
      <section>
        <div className={utilStyles.sectionHead}>
          <h2>Projects</h2>
          <div className={utilStyles.rule}></div>
        </div>
        <ul className={utilStyles.projectList}>
          {(allProjectsData || []).slice(0, 5).map(({ id, title }) => (
            <li key={id}>
              <Link href={`/projects/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/projects" className={utilStyles.seeMore}>All projects</Link>
      </section>
      <section>
        <div className={utilStyles.sectionHead}>
          <h2>Writing</h2>
          <div className={utilStyles.rule}></div>
        </div>
        <ul className={utilStyles.postList}>
          <li>
            <Link href={`/posts/${allPostsData[0].id}`}>
              <span className={utilStyles.postTitle}>{allPostsData[0].title}</span>
              <span className={utilStyles.postDate}><Date dateString={allPostsData[0].date} /></span>
            </Link>
          </li>
          <li>
            <Link href={`/posts/${allPostsData[1].id}`}>
              <span className={utilStyles.postTitle}>{allPostsData[1].title}</span>
              <span className={utilStyles.postDate}><Date dateString={allPostsData[1].date} /></span>
            </Link>
          </li>
          <li>
            <Link href={`/posts/${allPostsData[2].id}`}>
              <span className={utilStyles.postTitle}>{allPostsData[2].title}</span>
              <span className={utilStyles.postDate}><Date dateString={allPostsData[2].date} /></span>
            </Link>
          </li>
        </ul>
        <Link href="/writing" className={utilStyles.seeMore}>All posts</Link>
      </section>
    </Layout>
  );
}
