import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setMyList, setUser} from "../../../redux-store/action";

import {UserInfoWrapper} from './styled.js';

const UserInfo = () => {
  const currentUser = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const LogOut = (event) => {
    event.preventDefault();
    if (localStorage.getItem("token")) {
      localStorage.clear();
      dispatch(setUser({}));
      dispatch(setMyList([]))
    }
  };

  return (
    <UserInfoWrapper>
      <div className='userInfo_block'>Name : <span>{currentUser.username}</span></div>
      <div className='userInfo_block'>Email : <span>{currentUser.email}</span></div>
      <button className='logout_btn' onClick={(e) => LogOut(e)}>log out</button>
    </UserInfoWrapper>
  )
}

export default UserInfo;
