import React from 'react';

import { skills } from './../../constants/Skills';


import './skills.css';
import { SkillCard } from '../SkillCard/SkillCard';

export const Skills = ({ skills }) => {
    return (
        <div className="skills-container">
            <h3>Industry Knowledge</h3>
            <div className="industry-skill-container">
                <SkillCard skill="Software" />
            </div>
        </div>
    )
}