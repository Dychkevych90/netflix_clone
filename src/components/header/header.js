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
import {setUser} from "../../redux-store/action";
import {useDispatch} from "react-redux";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  const LogOut = (event) => {
    event.preventDefault();
    if (localStorage.getItem("token")) {
      localStorage.clear();
      dispatch(setUser({}));
    }
  };

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

            <button className='user_info' onClick={(event) => LogOut(event)}>
              <FontAwesomeIcon
                className='icon photo'
                icon={ User }
              />

              <FontAwesomeIcon
                className='icon arrow'
                icon={ ArrowDown }
              />
            </button>
          </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header;
