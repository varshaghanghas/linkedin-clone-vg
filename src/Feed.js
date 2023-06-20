import React, { useState } from 'react';
import "./Feed.css";
// import CreateIcon from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();

    // setPosts([])
  };

  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                  <input type='text' />
                  <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
              <InputOption Icon={ImageIcon} title='Photo' 
              color="#70B5F9" />
              <InputOption Icon={SubscriptionsIcon} title='Video' 
              color="#e7a33e" />
              <InputOption Icon={EventNoteIcon} title='Event' 
              color="#c0cbcd" />
              <InputOption Icon={CalendarViewDayIcon} title='Write Article' 
              color="#7fc15e" />
            </div>
        </div>

        {/* Posts */}
        {posts.map((post) => {
          <Post name="Varsha Ghanghas" 
            description="This is a test post." 
            message="Wow this worked!" 
            photoUrl=""
          />
        })}
        <Post name="Varsha Ghanghas" 
          description="This is a test post." 
          message="Wow this worked!" 
          photoUrl=""
        />

    </div>
  )
}

export default Feed
