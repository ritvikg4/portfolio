import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function CellularInfill() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Cellular Infill</h1>
            <p className={utilStyles.lightText}>Cellular automata for 3D printer infill — Wolfram Emerging Leaders Program</p>
            <img  src="/images/ca.png" alt="Cellular Automata" width={500} />
            <main>
                <p>
                    Working in a team of 3 in the Wolfram Emerging Leaders Program, I developed a novel method for generating 3D printer infill.
                    <br/>
                    <br/>
                    I implemented 3D cellular automata in the Wolfram Language to algorithmically generate infill geometries. In contrast to traditional empirical patterns, this approach takes advantage of the emergent properties of cellular automata to create more efficient and customizable structures.
                    <br/>
                    <br/>
                    I parameterized infill density and connectivity rules to optimize structural efficiency against print material usage, then validated the automata-generated structures with successful test prints on a Bambu Lab printer.
                    <br/>
                    <br/>
                    Staff pick on <a href="https://community.wolfram.com/groups/-/m/t/3379925" target="_blank">Wolfram Community</a>.
                </p>
            </main>
        </Layout>
    );
}
