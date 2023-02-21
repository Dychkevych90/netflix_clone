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
import {useDispatch, useSelector} from "react-redux";
import UserInfo from "../modals/userInfo/userInfo";

const Header = () => {
  const currentUser = useSelector( ( state ) => state.user);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isShowUserInfoModal, setIsShowUser] = useState(false);

  const dispatch = useDispatch();

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

              <NavLink to='/search'>Search</NavLink>

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

            <button className='user_info' onClick={() => setIsShowUser(!isShowUserInfoModal)}>
              <FontAwesomeIcon
                className='icon photo'
                icon={ User }
              />

              <FontAwesomeIcon
                className='icon arrow'
                icon={ ArrowDown }
              />
              {
                isShowUserInfoModal && (
                  <UserInfo />
                )
              }
            </button>
          </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header;
