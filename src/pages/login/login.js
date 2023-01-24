import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import MainInput from "../../components/input/input";

import { setUser } from "../../redux-store/action";

import { LoginWrapper, LoginForm } from './styled.js';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
  const [disable, setDisabled] = useState(true );
  const [validation, setValidation] = useState(false )
  const [currentUser, setCurrentUser] = useState({});

  const dispatch = useDispatch();

  const updateData = ( value ) => {
    setDisabled( value );
  }

  const onLogin = async ( e ) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password =  e.target.password.value;

    try {
      const res = await axios.post(`auth/login`, { username, password } );
      if ( res.data ) {
        dispatch( setUser( res.data.details) );
        setCurrentUser(res.data.details)
        //window.localStorage.setItem('token', JSON.stringify(currentUser.token) );
      }
    } catch (error) {
      console.log(error, 'wrong credentials!')
      setValidation( true )
    }
  };

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify({token: currentUser.token}));
  }, [currentUser.token]);

  return (
    <LoginWrapper>
      <LoginForm onSubmit={(e) => onLogin(e)}>
        <h1>Sign In</h1>

        <MainInput
          required={ true }
          type='text'
          label='username'
          name='username'
          validation={ validation }
          updateData={ updateData }
        />

        <MainInput
          required={ true }
          type='password'
          label='password'
          name='password'
          validation={ validation }
          updateData={ updateData }
        />

        <button
          type="submit"
          className='form_button'
        >
          Sign In
        </button>

        <p className='registration'>New to Netflix? <Link to='/login'><b>Sign up now.</b></Link></p>

        <small className='info_text'>
          This page is protected by Google reCAPTCHA to ensure you're not a
          bot. <b>Learn more</b>.
        </small>
      </LoginForm>
    </LoginWrapper>
  )
}

export default Login;
