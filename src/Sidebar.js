import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v904-nunny-004.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=419940fc6baf1c6a20e20b10dbaf34f9' alt='' />
            <Avatar className='sidebar__avatar' />
            <h2>Varsha Ghanghas</h2>
            <h4>varsha.ghanghas07@gmail.com</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,542</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>2,548</p>
            </div>
        </div>
        <div className='sidebar__bottom'>
            <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar
