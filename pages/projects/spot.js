import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function Spot() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Spot Payload</h1>
            <p className={utilStyles.lightText}>Making industry robotics accessible in the classroom — Spot@MHS</p>
            <img  src="/images/spot.gif" alt="Spot in our makerspace" width={360} />
            <main>
                <p>
                    Working with my high school and Boston Dynamics, I helped make the Spot robot dog usable as a classroom tool.
                    <br/>
                    <br/>
                    I developed a comprehensive educational curriculum for Spot, streamlining its use for students and instructors. Alongside it, I designed and open-sourced a modular payload system that expands Spot's capabilities in a cost-effective way.
                    <br/>
                    <br/>
                    The full resource we created can be found <a href="https://ritvikg4.github.io/spot-mhs/" target="_blank">here</a>.
                </p>
            </main>
        </Layout>
    );
}
