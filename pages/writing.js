import Head from 'next/head';
import Layout, { siteTitle } from '../components/regularLayout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Writing({ allPostsData }) {
  function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("blogInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("blogList");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }

    console.log(input);
  }

  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingXl}>Writing</h2>
        <input type="text" id="blogInput" className={utilStyles.searchBar} onKeyUp={() => search()} placeholder="Search..." />
        <ul className={utilStyles.postList} id="blogList">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <span className={utilStyles.postTitle}>{title}</span>
                <span className={utilStyles.postDate}><Date dateString={date} /></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}