import React from 'react';

import './portfolio.css'
import { SideNav } from './../SideNav/SideNav';
import { SectionContainer } from './../SectionContainer/SectionContainer'

export const Portfolio = ({ handleSectionClick, about, skills, selectedHeading, selectedQuote, selectedSection }) => {
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">
                <SideNav
                handleSectionClick={handleSectionClick} />
            </div>
            <div className="main-section-container">
                <SectionContainer 
                about={about}
				skills={skills}
				selectedHeading={selectedHeading}
				selectedSection={selectedSection}
				selectedQuote={selectedQuote} />
            </div>
        </div>
    )
}