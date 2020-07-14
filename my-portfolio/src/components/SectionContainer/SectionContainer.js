import React from 'react';

import { About } from './../About/About'
import './section-container.css';

export const SectionContainer = (props) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">About Me</h1>
                <p className="main-quote">"Pick a flower on Earth and you move the farthest star."</p>
            </div>
            <div className="section-component">
                <About />
            </div>
        </div>
    )
}