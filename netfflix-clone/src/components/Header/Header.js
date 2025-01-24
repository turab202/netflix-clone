import React from 'react';
import "./Header.css";
import HAZALOGO from "../../Assets/images/HAZALOGO.jpg";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
    return (
        <div className='Header-outer-container'>
            <div className='Header-container'>
                <div className='Header-left'>
                    <ul>
                    <li> <img src={HAZALOGO} width="85"  alt="Logo"/></li>
                        
                        <li>Home</li>
                        <li>Kids</li>
                        
                        <li>Shorts</li>
                        <li>Latest</li>
                        <li>MyList</li>
                        <li>Browse by Languages</li>
                    </ul>
                </div>
                <div className='Header-right'>
                    <ul>
                     <li><SearchIcon/></li>
                     <li><NotificationsNoneIcon/></li>
                     <li><AccountBoxIcon/></li>
                     <li><ArrowDropDownIcon/></li>
                    </ul> 
                </div>
            </div>
        </div>
    );
}

export default Header;
