import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" 
              alt='' 
            />

            <div className='header__search'>
                <SearchIcon />
                <input type='text' />
            </div>
        </div>

        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption avatar="https://media.licdn.com/dms/image/C5603AQH3vHC6PRfgRQ/profile-displayphoto-shrink_100_100/0/1659562608863?e=1687996800&v=beta&t=yzUepixWOSq9Ik0LHzLi5wB357Uqx0HmqNXmflJDL6Y" title="Me" />
        </div>
    </div>
  )
}

export default Header
