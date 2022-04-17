import React from 'react';
import './Post.css';

import {Avatar} from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
  displayName,
  username,
  verified,
  text,
  image,
  avatar
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/1496583375913639940/SQvK2KbV_400x400.jpg" />
      </div>

      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Fatih Huseyinogullari{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge"/> @nextgenturk
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenge you to build a Twitter Clone with React</p>
          </div>
        </div>
        <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  )
}

export default Post;