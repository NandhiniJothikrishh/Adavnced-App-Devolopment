import React from 'react'
import { Link} from 'react-router-dom';
import Apt1 from '../../assets/arr.jpeg'
import Apt2 from '../../assets/cmdy.jpg'
import Apt6 from '../../assets/templ3.jpeg'
import Apt4 from '../../assets/templ1.webp'
import Apt5 from '../../assets/templ2.webp'
import Apt7 from '../../assets/templ5.png'
import Aot10 from '../../assets/Aot10.png'
import Apt11 from '../../assets/Apt11.webp'
import Apt12 from '../../assets/Apt12.png'

import './Best.css'

const Best = () => {
    return (
        <section id='best'>
        <div className='best'>
            <h1>Find Best Rated Events in Town</h1>
            <div>
                <p><span className='bold'>All Experience</span></p>
                <p>Music</p>
                <p>Comedy</p>
                <p>Party</p>
                <p>Dance</p>
                <p>Education</p>
            </div>
            <div className='container'>
                <img src={Apt1} alt='' />
                <img src={Apt2} alt='' />
                <img src={Apt6} alt='' />
                <img className='apt4' src={Apt4} alt='' />
                <img src={Apt5} alt='' />
                <img src={Apt7} alt='' />
                <img src={Aot10} alt=''/>
                <img src={Apt11} alt=''/>
                <img src={Apt12} alt=''/>
            </div>
            <Link to="/Bookevent"><button className="btn">Book Event</button></Link>
        </div>
        </section>
    )
}

export default Best
