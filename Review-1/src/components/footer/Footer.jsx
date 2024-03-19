import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
    return (
        <section id='footer'>
        <div className='footer'>
            <div className='social'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTwitter className='icon' />
                <FaPinterest className='icon' />
            </div>
            <div className='footertxt'>
                <p>At our core, we are passionate about connecting people with their favorite events and creating memorable experiences.</p>
                <p> We understand the excitement and anticipation 
                that comes with attending live events, and our goal is to enhance that experience from start to finish.</p>
                <p>What sets us apart is our commitment to offering a vast selection of events, ensuring there's something for everyone.</p>
                <p>From music and sports to arts and culture, 
                    we curate a diverse range of events to cater to different interests and preferences. With our user-friendly interface,
                    you can effortlessly explore events, browse detailed descriptions, 
                    and find the perfect ticket that suits your needs.
                </p>
            </div>
                
        </div>
        </section>
    )
}

export default Footer
