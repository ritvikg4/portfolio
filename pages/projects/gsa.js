import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function GSA() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Garden State Alliance</h1>
            <p className={utilStyles.lightText}>A community uniting New Jersey robotics teams</p>
            <img  src="/images/gsa.png" alt="Garden State Alliance logo" width={220} />
            <main>
                <p>
                    Recognizing the need for a dedicated community around high school robotics in New Jersey, I founded the Garden State Alliance. Centered on the FIRST Tech Challenge, it gives teams a place to share ideas, ask for help, and organize community events.
                    <br/>
                    <br/>
                    Check us out at <a href="https://www.gardenstatealliance.org" target="_blank">gardenstatealliance.org</a> to see how to get involved.
                </p>
            </main>
        </Layout>
    );
}
