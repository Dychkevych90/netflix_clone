import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import UserInfo from "../modals/userInfo/userInfo";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  Bell,
  Search,
  ArrowDown,
  User,
  Hamburger,
  Home,
  Series,
  Movies,
  List
} from '../../constants/icons'

import Logo from '../../media/logo.png';
import {
  HeaderWrapper,
  ResponsiveMenu,
  Overlay
} from './styled.js';

const Header = () => {
  const currentUser = useSelector((state) => state.user);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isShowUserInfoModal, setIsShowUser] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <>
      <HeaderWrapper className={isScrolled && "scrolled"}>
        <div className='container'>
          <div className='left'>
            <Link
              to='/'
              className='logo'
            >
              <img
                src={Logo}
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
              className='icon bell'
              icon={Bell}
            />

            <NavLink to='/search' className='search_btn'>
              <FontAwesomeIcon
                className='icon search'
                icon={Search}
              />
            </NavLink>

            <button className='hamburger_btn' onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon
                className='icon hamburger'
                icon={Hamburger}
              />
            </button>

            {
              Object.keys(currentUser).length === 0 ? (
                <NavLink className='signIn_btn' to='/login'>sign in</NavLink>
              ) : (
                <button className='user_info' onClick={() => setIsShowUser(!isShowUserInfoModal)}>
                  <FontAwesomeIcon
                    className='icon photo'
                    icon={User}
                  />

                  <FontAwesomeIcon
                    className='icon arrow'
                    icon={ArrowDown}
                  />
                  {
                    isShowUserInfoModal && (
                      <UserInfo/>
                    )
                  }
                </button>
              )
            }
          </div>
        </div>
      </HeaderWrapper>

      {
        isOpen && (
          <Overlay onClick={() => setIsOpen(!isOpen)} >
            <ResponsiveMenu className={`${isOpen && `active`}`}>
              <img
                src={Logo}
                alt='logo'
                className='logo'
              />

              <ul className="menu">
                <li className="menu_item">
                  <NavLink to="/">
                    <FontAwesomeIcon className='icon' icon={Home}/>
                    <span>Home</span>
                  </NavLink>
                </li>

                <li className="menu_item">
                  <NavLink to="/Series">
                    <FontAwesomeIcon className='icon' icon={Series}/>
                    <span>Series</span>
                  </NavLink>
                </li>

                <li className="menu_item">
                  <NavLink to="/Movies">
                    <FontAwesomeIcon className='icon' icon={Movies}/>
                    <span>Movies</span>
                  </NavLink>
                </li>

                <li className="menu_item">
                  <NavLink to="/Search">
                    <FontAwesomeIcon className='icon' icon={Search}/>
                    <span>Search</span>
                  </NavLink>
                </li>

                <li className="menu_item">
                  <NavLink to="/myList">
                    <FontAwesomeIcon className='icon' icon={List}/>
                    <span> My List</span>
                  </NavLink>
                </li>
              </ul>
            </ResponsiveMenu>
          </Overlay>
        )
      }
    </>
  )
}

export default Header;
