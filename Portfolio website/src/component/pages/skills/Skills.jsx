import React from 'react';
import './skillsStyle.css';
import SkillsItem from './skillsItem';

export const Skills = () => {
    return (
        <>
            <div className="container">
                <div className="skills">
                    <div className="skill-heading">
                    <h3>Skills</h3>
                    </div>
                    <div className="skills-detail">
                        <ul className='skillItem'>
                            {
                                SkillsItem.map((item, index) => {
                                    return (
                                        // <li className='skil-itm'>{item.img}</li>
                                        <img src={item.img} alt="" className='skill-img'/>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}