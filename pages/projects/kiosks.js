import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function Kiosks() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Kiosks</h1>
            <p className={utilStyles.lightText}>A high school security system — for students, by students</p>
            <main>
                <p>
                    A student-designed check-in and security concept for our high school, developed and presented to district leadership as a practical, student-built alternative to off-the-shelf systems.
                    <br/>
                    <br/>
                    <a href="https://4.files.edl.io/80f1/12/07/22/203049-3948b4a9-47c9-42a4-9be2-0627b3d91db1.pdf" target="_blank">Download the write-up (PDF)</a>
                    <br/>
                    <a href="https://drive.google.com/file/d/1WgsLruIxR3yQqGr2jSFc23u3Ass2CxOU/view?usp=sharing" target="_blank">View the presentation slides</a>
                </p>
            </main>
        </Layout>
    );
}
