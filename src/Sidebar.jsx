import React from 'react'
import './Sidebar.css'
import {Avatar} from '@mui/material'

import simon from './assets/images/banners/simon2.jpeg'
import profile_pic from './assets/images/avatars/profile_pic.png'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-top">
            <img src={simon} alt="Sidebar banner" />
            <Avatar className="sidebar-avatar" src={profile_pic}/>
            <h2>Brandon Taylor</h2>
            <h4>brandon.david4@outlook.com</h4>
        </div>
        <div className="sidebar-stats">
            <div className="sidebar-stat">
                <p>Who viewed you</p>
                <p className="sidebar-statnumber">2,099</p>
            </div>
            <div className="sidebar-stat">
                <p>Views on post</p>
                <p className="sidebar-statnumber">1,659</p>
            </div>
        </div>

        <div className="sidebar-bottom">
            <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar