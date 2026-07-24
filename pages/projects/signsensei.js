import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function SignSensei() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>SignSensei</h1>
            <p className={utilStyles.lightText}>Teaching ASL with computer vision — PennApps 2023</p>
            <img  src="/images/signsensei.png" alt="SignSensei" width={500} />
            <main>
                <p>
                    A PennApps 2023 project that uses MediaPipe's hand-pose recognition to turn practicing sign language into an interactive tutor, giving real-time feedback on how closely your hand matches each sign.
                    <br/>
                    <br/>
                    Check out our <a href="https://devpost.com/software/signsensei" target="_blank">Devpost</a> submission.
                </p>
            </main>
        </Layout>
    );
}
