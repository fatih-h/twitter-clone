import React from 'react';
import './TweetBox.css';
import {Avatar,Button} from '@mui/material';

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1496583375913639940/SQvK2KbV_400x400.jpg" />
          <input placeholder="What's happening?" type="text" />
        </div> 
        <input className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"></input>
        <Button variant="outlined" className="tweetBox__tweetButton" >Tweet</Button>
      </form>      
    </div>
  )
}

export default TweetBox;