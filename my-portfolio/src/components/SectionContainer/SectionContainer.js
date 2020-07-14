import React from 'react';

import { About } from './../About/About';
import { Skills } from './../Skills/Skills';
import './section-container.css';

export const SectionContainer = ({ about, skills, selectedHeading, selectedQuote, selectedSection }) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">{selectedHeading}</h1>
                <p className="main-quote">{selectedQuote}</p>
            </div>
            <div className="section-component">
                {
                    {
                        about: <About />,
                        skills: <Skills />
                    }[selectedSection]
                }
            </div>
        </div>
    )
}