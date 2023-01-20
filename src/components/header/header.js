import React, {useEffect, useState} from 'react';
import { Link,NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Bell,
  Search,
  ArrowDown,
  User,
} from '../../constants/icons'

import Logo from '../../media/logo.png';
import {
  HeaderWrapper,
} from './styled.js';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <HeaderWrapper className={ isScrolled && "scrolled" }>
      <div className='container'>
        <div className='left'>
            <Link
              to='/'
              className='logo'
            >
              <img
                src={ Logo }
                alt='logo'
              />
            </Link>

            <nav className='navigation'>
              <NavLink to='/'>Home</NavLink>

              <NavLink to='/series'>Series</NavLink>

              <NavLink to='/movies'>Movies</NavLink>

              <NavLink to='/popular'>Popular</NavLink>

              <NavLink to='/myList'>My List</NavLink>
            </nav>
          </div>

        <div className='right'>
            <FontAwesomeIcon
              className='icon'
              icon={ Bell }
            />

            <FontAwesomeIcon
              className='icon'
              icon={ Search }
            />

            <div className='user_info'>
              <FontAwesomeIcon
                className='icon photo'
                icon={ User }
              />

              <FontAwesomeIcon
                className='icon arrow'
                icon={ ArrowDown }
              />
            </div>
          </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header;
