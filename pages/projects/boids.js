import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function Boids() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Guiding Boids</h1>
            <p className={utilStyles.lightText}>Steering emergent flocking with a parametric vector field — Wolfram Summer Research Program</p>
            <img  src="/images/vf.png" alt="3D Vector Field" width={500} />
            <main>
                <p>
                    During my time at the Wolfram High School Summer Research Program, I investigated how vector fields could be used to manipulate the behavior of simulated birds.
                    <br/>
                    <br/>
                    I implemented a bird flocking simulation in the Wolfram Language, demonstrating emergent behavior arising from a few simple rules. I then integrated a guiding vector field to direct the flock, achieving convergence onto — and following of — arbitrary parametric paths.
                    <br/>
                    <br/>
                    Staff pick on <a href="https://community.wolfram.com/groups/-/m/t/3211600" target="_blank">Wolfram Community</a> and a <a href="https://education.wolfram.com/summer-research-high-school/" target="_blank">WSRP</a> featured project.
                </p>
            </main>
        </Layout>
    );
}
