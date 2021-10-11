import React from 'react'

const PortfolioItem = (props) => (
    <p>This is my project of id: {props.match.params.id}</p>
)

export default PortfolioItem