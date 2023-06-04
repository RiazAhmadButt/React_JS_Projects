import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from '../NavBar/Nav';
import { WUrl } from '../pages/404 page/WUrl';
import { About } from '../pages/about/About';
import { Contact } from '../pages/contact/Contact';
import { Portfolio } from '../pages/Portfolio/Portfolio';
import { Home } from '../pages/home/Home';
import { Skills } from '../pages/skills/Skills';
import { WhatIDo } from '../pages/whatIDo/WhatIDo';


export const Config = () => {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/whatIDo' element={<WhatIDo />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<WUrl />} />
                </Routes>
            </Router>
        </>
    )
}