import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="home-section">
            <div className="container ">
                <div className="row">
                    <div className="col-12">
                        <p className="exclusive">Hello! I am</p>
                        <h1 className="name">Iftekhar Rafti</h1>
                        <h3 className="exclusive">Fontend Web Developer</h3>
                        <ul className="list">
                            <li>Frontend Developers</li>
                            <li>Programmer</li>
                            <li>Learner</li>
                        </ul>
                        <button className="btn resume ">Get Resume</button>
                        <Link className="btn" to="/about">About Me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;