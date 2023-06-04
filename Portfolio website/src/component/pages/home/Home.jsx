import React from 'react';
import HeroImg from '../../../assets/images/hero.png';
import './homeStyle.css';
import Typed from 'react-typed';

export const Home = () => {
    return (
        <>
            <div className="container">
                <div className="hero">
                    <div className="left-hero">
                        <div className="hero-heading">
                            <h1>Helo, i'm Riaz</h1>
                            <Typed
                            strings={[
                                "I'm a React JS Developer",
                                "I'm a Frontend Developer",
                                "I'm a JavaScript Developer",
                                "I'm a Full Stack Developer",
                                "I'm a Team Person",
                            ]}
                            typeSpeed={150}
                            backSpeed={100}
                            loop
                            />
                        </div>
                        <div className="hero-para">
                            <p>A passionate Full Stack Software Developer having a special interest in Frontend technologies and experience of building Web 
                            applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.</p>
                        </div>
                        <div className="hero-btn">
                            <div className='hire-me'>
                                <a href="https://www.linkedin.com/in/riaz-ahmad-butt-921aab1a6">Hire Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="right-hero">
                        <img src={HeroImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
