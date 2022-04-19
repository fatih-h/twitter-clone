import React from 'react';
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>
        
        <TwitterTweetEmbed tweetId="1516037097437732865"/>

        <TwitterTimelineEmbed 
          sourceType="profile"
          screenName="archillect"
          options={{height:400,width:400}}
        />

        <TwitterShareButton 
          url={"https://www.youtube.com/watch?v=rJjaqSTzOxI&t=7979s"}
          options={{text: "#reactjs is awesome", via:"nextgenturk"}}
        />

      </div>
    </div>
  )
}

export default Widgets;