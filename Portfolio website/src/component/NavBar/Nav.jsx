import React, { useEffect, useState } from 'react';
import { NavItems } from './NavItems';
import { Link } from "react-router-dom";
import Logo from '../../assets/images/RBLogo.png';
import './Nav.css';

export const Nav = () => {
    const [icon, setIcon] = useState(false);
    const [theme, setTheme] = useState("light-theme")
    const toggleTheme = () => {
        theme === "dark-theme" ? setTheme('light-theme') : setTheme('dark-theme' )
    }

    // or 

    // const toggleTheme =()=>{
    //    if (theme === "dark-theme"){
    //     setTheme('light-theme')
    //    }
    //    else{
    //     setTheme('dark-theme')
    //    }
    // }
    // const handleLinkClick = () => {
    //   };
    

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <>
            <div className='nav-bar'>
                <img src={Logo} alt="" className='logo' />
                <div className='item-section'>
                <div className='manu-icons' onClick={() => setIcon(!icon)}>
                    <i className={icon?"fas fa-times " : "fas fa-bars"}></i>
                </div>
                <ul className={icon? "mobile-responsive" : "nav-manu"} >
                    {NavItems.map((item, index) => {
                        return (
                            <>
                                <li key={index} onClick={() => setIcon(false)}>
                                    <Link to={item.url} className={item.cName}>
                                        <i className={item.icon}></i>
                                        {item.title}
                                    </Link>
                                </li>
                            </>
                        )
                    })}
                </ul>
                <button onClick={() => toggleTheme()}><i className={theme === "dark-theme" ? 'fas fa-sun' : 'fas fa-moon'}></i></button>
                </div>
            </div>
        </>
    )
}
