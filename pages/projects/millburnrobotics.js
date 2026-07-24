import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function MillburnAI() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Millburn Robotics</h1>
            <p className={utilStyles.lightText}>Four years of competitive robotics — VEX AI &amp; FIRST Tech Challenge</p>
            <img  src="/images/robot.png" alt="24-25 Robot" width={500} />
            <main>
                <p>
                    I joined my high school's robotics program as a freshman. It was made up of four VEX Robotics teams and one VEX AI team; I joined the VEX AI team with the goal of competing in the then-new VEX AI competition, building a robot to play that year's challenge (Tipping Point) fully autonomously.
                    <br/>
                    <br/>
                    More on that work lives on the <a href="https://millburnai.org" target="_blank">team website</a> I built, along with our <a href="https://www.youtube.com/@millburnrobotics174" target="_blank">YouTube channel</a>.
                    <br/>
                    <br/>
                    Since 2022, I've also competed in the FIRST Tech Challenge, serving as captain of my school's team from 2023. Along the way I picked up everything from robotics programming to operating heavy machinery in our shop. I competed with team #8405 and was a founding member of team #23650.
                </p>
            </main>
        </Layout>
    );
}
