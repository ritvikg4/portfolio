import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function IEM() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Illini Electric Motorsports</h1>
            <p className={utilStyles.lightText}>Driver Electronics Lead — Circuit Design for UIUC Formula SAE</p>
            <img  src="/images/iem.png" alt="Formula Car Sketch (Created with Copilot)" width={450} />
            <main>
                <p>
                    Illini Electric Motorsports (IEM) is the University of Illinois Urbana-Champaign's Formula SAE team.
                    <br/>
                    <br/>
                    I currently serve as the team's <strong>Dash Circuits Lead</strong>, owning the design of the driver dashboard and interface electronics. Previously, I led end-to-end development of the V2 Vehicle Control Board, integrating critical driver-safety fault-management circuits and multi-node CAN communication.
                    <br/>
                    <br/>
                    At <strong>FSAE Michigan 2026</strong>, the team placed <strong>3rd in Design</strong> and earned the <strong>highest-judged Low Voltage score overall</strong> out of 100+ teams.
                    <br/>
                    <br/>
                    On the hardware side, I designed robust power delivery and analog/digital routing layouts in Altium Designer, maximizing signal integrity and thermal performance under tight packaging constraints. I then formulated a rigorous hardware test and validation plan, isolating fault-management corner cases to ensure vehicle reliability ahead of competition.
                    <br/>
                    <br/>
                    On the software side, I developed an ISO-TP transport layer test plan to validate CAN communication across multiple ECUs, verifying message delivery with PCAN-USB. I also built a cost-effective hardware-in-the-loop (HIL) test setup using a LabJack U6-Pro to simulate ECU I/O, integrating a Python toolchain into the Bazel build system to run automated tests with pytest, with signal analysis in Matplotlib and NumPy.
                    <br/>
                    <br/>
                    A render of the completed V2 Vehicle Control Board for 2026:
                    <img  src="/images/safetyv2_render.png" alt="Vehicle Control Board V2 Render" width={450} />
                </p>
            </main>
        </Layout>
    );
}
