import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
// import { FaRegTimesCircle } from 'react-icons/fa'
import { BsFillHouseFill } from 'react-icons/bs'
import Hero from '../hero/Hero'
import Best from '../best/Best'
import Featured from '../featured/Featured'
import Footer from '../footer/Footer'
import './Navbar.css'

import {Link } from 'react-router-dom';

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <>

            <div className='navbar'>
                <div className='container'>
                    <h1><span><BsFillHouseFill /> The eVEnt </span>TodAY</h1>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li><a href='#hero'>Home</a></li>
                        <li><a href='#best'>Events</a></li>
                        <li><a href='#footer'>AboutUs</a></li>
                        
                        <li ><a href='/'>Back to Login</a></li>
                    </ul>
                    
                    <div className='hamburger' onClick={handleClick}>
                        {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}

                    </div>
                </div>
            </div>
            <div>
                <Hero />,
                <Best />,
                
                <Footer />
            </div>
        </>
    )
}

export default Navbar