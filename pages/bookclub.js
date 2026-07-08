import Head from 'next/head';
import Layout from '../components/regularLayout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';

const books = [
  {
    title: 'The Oregon Trail',
    author: 'Francis Parkman',
    note: 'A firsthand account of the trail and frontier life in 1846.',
    status: 'Reading',
    cover: 'https://covers.openlibrary.org/b/id/1967272-L.jpg',
  },
  {
    title: 'Skunk Works',
    author: 'Ben R. Rich',
    note: "A memoir from inside Lockheed's secret aircraft lab.",
    status: 'Finished',
    cover: 'https://covers.openlibrary.org/b/isbn/9780316743006-L.jpg',
  },
  {
    title: 'Greenlights',
    author: 'Matthew McConaughey',
    note: 'Life lessons and stories from the actor’s journals.',
    status: 'Finished',
    cover: 'https://covers.openlibrary.org/b/isbn/9780593139134-L.jpg',
  },
  {
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    note: 'A lone astronaut solves an extinction-level crisis with science.',
    status: 'Finished',
    cover: 'https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg',
  },
  {
    title: 'The Martian',
    author: 'Andy Weir',
    note: 'An astronaut stranded on Mars engineers his own survival.',
    status: 'Finished',
    cover: 'https://covers.openlibrary.org/b/isbn/9780553418026-L.jpg',
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    note: 'Politics, prophecy, and survival on the desert planet Arrakis.',
    status: 'Finished',
    cover: 'https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg',
  },
];

const currentBook = books.find((b) => b.status === 'Reading');
const pastBooks = books.filter((b) => b.status !== 'Reading');

export default function BookClub() {
  function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('bookInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('bookList');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }

  return (
    <Layout>
      <Head>
        <title>Ritvik</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingXl}>Book Club</h2>
        <p className={utilStyles.lightText}>Keeping track of books I&apos;m reading, 2026 and onwards</p>

        {currentBook && (
          <>
            <div className={utilStyles.sectionHead}>
              <h3 className={utilStyles.bookSectionTitle}>Currently Reading</h3>
              <div className={utilStyles.rule}></div>
            </div>
            <div className={utilStyles.featuredBook}>
              <img
                className={utilStyles.featuredCover}
                src={currentBook.cover}
                alt={`${currentBook.title} cover`}
              />
              <div className={utilStyles.featuredInfo}>
                <span className={utilStyles.featuredTitle}>{currentBook.title}</span>
                <span className={utilStyles.featuredAuthor}>{currentBook.author}</span>
                {currentBook.note && (
                  <span className={utilStyles.featuredNote}>{currentBook.note}</span>
                )}
                {currentBook.date && (
                  <span className={utilStyles.bookDate}>
                    <Date dateString={currentBook.date} />
                  </span>
                )}
              </div>
            </div>
          </>
        )}

        <div className={utilStyles.sectionHead}>
          <h3 className={utilStyles.bookSectionTitle}>Previously Read</h3>
          <div className={utilStyles.rule}></div>
        </div>
        <input
          type="text"
          id="bookInput"
          className={utilStyles.searchBar}
          onKeyUp={() => search()}
          placeholder="Search books..."
        />
        <ul className={utilStyles.bookList} id="bookList">
          {pastBooks.map(({ title, author, date, note, status, cover }) => (
            <li key={title}>
              <a>
                <img className={utilStyles.bookCover} src={cover} alt={`${title} cover`} />
                <div className={utilStyles.bookInfo}>
                  <div className={utilStyles.bookHead}>
                    <span className={utilStyles.bookTitle}>{title}</span>
                    <span className={utilStyles.bookStatus}>{status}</span>
                  </div>
                  <span className={utilStyles.bookAuthor}>{author}</span>
                  {note && <span className={utilStyles.bookNote}>{note}</span>}
                  {date && (
                    <span className={utilStyles.bookDate}>
                      <Date dateString={date} />
                    </span>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
