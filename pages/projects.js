import Head from 'next/head';
import Layout, { siteTitle } from '../components/regularLayout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getAllProjectsData } from '../lib/projects';

const allProjectsData = getAllProjectsData();

export default function Projects() {
  function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("projectInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("projectList");
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
        <h2 className={utilStyles.headingXl}>Projects</h2>
        <input type="text" id="projectInput" className={utilStyles.searchBar} onKeyUp={() => search()} placeholder="Search projects..." />
        <ul className={utilStyles.projectList} id="projectList">
          {allProjectsData.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/projects/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}