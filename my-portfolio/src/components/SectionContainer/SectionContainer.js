import React from 'react';

import './section-container.css';

export const SectionContainer = (props) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">About Me</h1>
                <p className="main-quote">"this is a quote"</p>
            </div>
        </div>
    )
}