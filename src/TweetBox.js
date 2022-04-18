import React, { useState } from 'react';
import './TweetBox.css';
import {Avatar,Button} from '@mui/material';
import db from './firebase';

function TweetBox() {
  const [tweetMessage,setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "The Turk",
      username: "calis_calis_nereye_kadar",
      verified:false,
      text: tweetMessage,
      image:tweetImage,
      avatar:"https://pbs.twimg.com/profile_images/1222646977332174849/xWcD6t_Q_400x400.jpg"
    });

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1222646977332174849/xWcD6t_Q_400x400.jpg" />
          <input
            value={tweetMessage}
            onChange = {(e) => setTweetMessage(e.target.value)}  
            placeholder="What's happening?" 
            type="text" 
          />
        </div> 
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          variant="outlined"
          className="tweetBox__tweetButton"
        >Tweet</Button>
      </form>      
    </div>
  )
}

export default TweetBox;