import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function Branchly() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Branchly</h1>
            <p className={utilStyles.lightText}>Skill-tree self-learning powered by LLMs — PennApps 2024</p>
            <img  src="/images/branchly.png" alt="Branchly" width={500} />
            <main>
                <p>
                    A PennApps 2024 project: a skill-tree-based learning platform that breaks any topic into an explorable map of prerequisites, using large language models to generate the branches and guide you through them.
                    <br/>
                    <br/>
                    Check out our <a href="https://devpost.com/software/branchly" target="_blank">Devpost</a> submission.
                </p>
            </main>
        </Layout>
    );
}
