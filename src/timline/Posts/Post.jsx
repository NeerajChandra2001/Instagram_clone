import React from 'react'
import './post.css'
import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";




function Post({user,postImage,likes,timestamp}) {
  return (
    <div className='post'>
      <div className='post_header'>
        <div className='post_headerAuth'>
          <Avatar className='avatar'>{user.charAt(0).toUpperCase()}</Avatar>
          {user}<span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className='post_image'>
        <img src={postImage} alt=''></img>
      </div>
      <div className='post_footer'>
        <div className='post_footerIcons'>
          <div className='post_iconsMain'>
            <FavoriteBorderIcon className='post_icon' />
            <ChatBubbleOutlineIcon className='post_icon' />
            <TelegramIcon className='post_icon' />

          </div>
          <div className='post_iconSave'>
            <BookmarkBorderIcon className='post_icon' />
          </div>
        </div>
       liked by {likes} people
      </div>

    </div>
  )
}

export default Post
