import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setUser} from "../../../redux-store/action";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { User } from '../../../constants/icons'
import {UserInfoWrapper, PhotoBlock} from './styled.js';

const UserInfo = () => {
  const currentUser = useSelector((state) => state.user);

  const [photo, setPhoto] = useState({})

  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setPhoto({file, preview: reader.result})
    }
    reader.readAsDataURL(file)
  }

  const LogOut = (event) => {
    event.preventDefault();
    if (localStorage.getItem("token")) {
      localStorage.clear();
      dispatch(setUser({}));
    }
  };

  const renderPreview = JSON.stringify(photo) === JSON.stringify({}) ? (
    <PhotoBlock htmlFor='photo-user'>
      <input
        accept="image/*"
        className={'hidden-input'}
        name={'photo'}
        id={'photo-user'}
        onChange={(e) => handleImageChange(e)}
        type={'file'}
        required={false}
      />
      <FontAwesomeIcon icon={User} className="preview"/>

      <div>Choose photo</div>
    </PhotoBlock>
  ) : (
    <PhotoBlock>
      <input
        accept="image/*"
        className={'hidden-input'}
        name={'photo'}
        id={'photo-user'}
        onChange={(e) => handleImageChange(e)}
        type={'file'}
        required={false}
      />

      {
        photo.file === ''
          ? <div className="preview"/>
          : <img className='avatar' alt={'preview'} src={photo.preview}/>
      }
    </PhotoBlock>
  )

  return (
    <UserInfoWrapper>
      {/*<div className='userInfo_block photo'>{renderPreview}</div>*/}
      <div className='userInfo_block'>Name : <span>{currentUser.username}</span></div>
      <div className='userInfo_block'>Email : <span>{currentUser.email}</span></div>
      <button className='logout_btn' onClick={(e) => LogOut(e)}>log out</button>
    </UserInfoWrapper>
  )
}

export default UserInfo;
