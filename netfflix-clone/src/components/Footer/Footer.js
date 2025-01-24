import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css"
// import { colors } from '@mui/material';
const Footer = () => {
    return (
        <div className='footer-outer-container'>
            <div className='footer-inner-container'>
                <div className='footer-icons'>
                   <FacebookIcon/>
                   <InstagramIcon/>
                   <YouTubeIcon/>
                </div>
                <div className = 'footer-data-link'>
                    <div>
                        <ul>
                            <h3 style={{color:" #12719D",}}>USE FULL LINKS</h3>
                            <li>Home</li>
                            <li>Shorts </li>
                            <li>List</li>
                        </ul>
                    </div>
                </div>
                <div className = 'footer-data'>
                    <div>
                        <ul>
                            <h3 style={{color:" #12719D",}}>OUR SERVICES</h3>
                            <li>Web Deveiopment</li>
                            <li>Graphic Design </li>
                            <li>Video Editing</li>
                        </ul>
                    </div>
                </div>
                <div className = 'footer-data-contact'>
                    <div>
                        <ul>
                            <h3 style={{color:" #12719D",}}>HAZA KIDS</h3>
                            <li>ADISSABABA, ETHIOPIA </li>
                            <li>Phone: +251900581575</li>
                            <li>Email: turabturqb@gmail.com</li>
                        </ul>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
export default Footer