import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './skill.css';

const Skill = () => {
    const htmlCss = 0.90;
    const bootstrap = 0.95;
    const javascript = 0.70;
    const react = 0.75;
    const github = 0.70;
    const wordpress = 0.60;
    return (
        <div className="skill">
            <h2>My <span>Skill</span></h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <CircularProgressbar className="progress" value={htmlCss} maxValue={1} text={`${htmlCss * 100}%`} />
                        <p className="progress-middle">HTML + CSS</p>
                    </div>
                    <div className="col-md-4">
                        <CircularProgressbar className="progress" value={bootstrap} maxValue={1} text={`${bootstrap * 100}%`} />
                        <p className="progress-middle">BOOTSTRAP</p>
                    </div>
                    <div className="col-md-4">
                        <CircularProgressbar className="progress" value={javascript} maxValue={1} text={`${javascript * 100}%`} />
                        <p className="progress-middle">JAVASCRIPT</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <CircularProgressbar className="progress" value={react} maxValue={1} text={`${react * 100}%`} />
                        <p className="progress-middle">REACT JS</p>
                    </div>
                    <div className="col-md-4">
                        <CircularProgressbar className="progress" value={github} maxValue={1} text={`${github * 100}%`} />
                        <p className="progress-middle">GITHUB</p>
                    </div>
                    <div className="col-md-4">
                        <CircularProgressbar className="progress" value={wordpress} maxValue={1} text={`${wordpress * 100}%`} />
                        <p className="progress-middle">WORDPRESS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;