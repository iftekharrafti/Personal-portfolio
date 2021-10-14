import React, {useState, useEffect} from 'react';
import SinglePort from '../SinglePort/SinglePort';
import './portfolio.css';

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState([]);
    useEffect(() => {
        fetch('./fakedb.json')
        .then(res => res.json())
        .then(data => setPortfolios(data))
    }, [])
    return (
        <div className="container portfolio">
            <h2>Portfolio</h2>
            <div className="row">
                {
                    portfolios.map(portfolio => <SinglePort
                        portfolio={portfolio}
                    ></SinglePort>)
                }
            </div>
        </div>
    );
};

export default Portfolio;