import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IosShareIcon from '@mui/icons-material/IosShare';
import SendIcon from '@mui/icons-material/Send';

function Post({name, description, message, photoURL}) {
  return (
    <div className="post">
        <div className="post-header">
            <Avatar />
            <div className="post-info">
                <h2>{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>
        <div className="post-body">
            <p>{message}</p>
        </div>
        <div className="post-buttons">
            <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray"/>
            <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" color="gray"/>
            <InputOption Icon={IosShareIcon} title="Share" color="gray"/>
            <InputOption Icon={SendIcon} title="Send" color="gray"/>

        </div>
    </div>
  )
}

export default Post