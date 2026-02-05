import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function IEM() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Illini Electric Motorsports</h1>
            <p className={utilStyles.lightText}>Circuit Design and Firmware for UIUC Formula SAE</p>
            <img  src="/images/iem.png" alt="Formula Car Sketch (Created with Copilot)" width={450} />
            <main>
                <p>
                    Illini Electric Motorsports (IEM) is the University of Illinois Urbana-Champaign's Formula SAE team.
                    <br/>
                    <br/>
                    As part of the team, I am leading the development of the main vehicle control board (or Safety Board).
                    <br/>
                    <br/>
                    Using Altium, I designed schematics for the Safety Board, incorporating power distribution, fault management, and status indicators. I executed a structured testing and validation plan for every circuit, using the gathered data to inform and implement design improvements for the V2 iteration.
                    <br/>
                    <br/>
                    On the software side, I developed an ISO-TP transport layer test plan to validate CAN communication across multiple ECUs, ensuring compliance with ISO-TP 2016 standards and verifying message delivery using PCAN-USB. I also built a cost-effective hardware-in-the-loop (HIL) test setup using LabJack U6-Pro to simulate ECU I/O, integrating a Python toolchain into the Bazel build system to run automated tests with pytest and the LabJack API. Signal analysis and plotting were performed using Matplotlib and NumPy.
                </p>
            </main>
        </Layout>
    );
}