import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css"
const Footer = () => {
    return (
        <div className='footer-outer-container'>
            <div className='footer-innerr-container'>
                <div className='footer-icons'>
                   <FacebookIcon/>
                   <InstagramIcon/>
                   <YouTubeIcon/>
                </div>
                <div className = 'footer-data'>
                    <div>
                        <ul>
                            <li>Web Deveiopment</li>
                            <li>hjyiuyi </li>
                            <li>wsfvjbmbnv</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer