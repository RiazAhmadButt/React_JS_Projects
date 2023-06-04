import React from 'react';
import './aboutStyle.css';
import Resume from '../../../assets/cv/resume.pdf';

export const About = () => {
    return (
        <>
            <div className="container">
                <div className="about-sec">
                    <div className="about-right">
                        <img src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Designer.gif" alt="" className='about-img' />
                    </div>
                    <div className="about-left">
                        <div className="about-heading">
                            <h1>About</h1>
                        </div>
                        <div className="about-detail">
                            <p>As a dedicated and ambitious 𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫 with a passion for 𝐟𝐫𝐨𝐧𝐭-𝐞𝐧𝐝 development, I am excited to continue 
                                growing my skills and knowledge in the field. Through my studies and hands-on projects, 
                                I have gained experience in 𝐑𝐞𝐚𝐜𝐭 𝐉𝐒 and other front-end technologies such as 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭, 𝐇𝐓𝐌𝐋, 𝐂𝐒𝐒, and 𝐁𝐨𝐨𝐭𝐬𝐭𝐫𝐚𝐩.
                                 I have also developed strong problem-solving and critical-thinking skills, as well as the ability to work effectively in a team environment. I am always looking for new opportunities to apply my skills and gain real-world experience in the software engineering industry. If you are looking for a hardworking and driven student 
                                who is eager to learn and contribute to your organization, please don't hesitate to contact me.</p>
                        </div>
                        <div className="about-btn">
                            {/* <a href></button> */}
                            <a href={Resume} download className='about-btn-download'>Resume</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}