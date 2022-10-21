import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import linkedin from './assets/images/icons/linkedin.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatar from './assets/images/avatars/profile_pic.png'

function Header() {
  return (
    <div className="header">

        <div className="header-left">

          <img src={linkedin} alt="linkedin icon" />
          <div className="header-search">
            <SearchIcon />
            <input type="text" />
          </div>

        </div>
        <div className="header-right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={ChatIcon} title="Messaging"/>
          <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
          <HeaderOption avatar={avatar} title="me"/>
        </div>
    </div>
  )
}

export default Header