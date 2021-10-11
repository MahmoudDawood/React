import React from 'react'
import { Link } from 'react-router-dom'
// import One from 'One'
        // <Link to="/2" component={Two}> Project Two</Link>

const Portfolio = () => (
    <div>
        <h1>My Work</h1>
        <p>Checkout some of my projects:</p>
        <Link to="/portfolio/1">Project One</Link> -
        <Link to="/portfolio/2"> Project Two</Link>
    </div>
)

export default Portfolio