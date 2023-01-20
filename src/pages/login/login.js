import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainInput from "../../components/input/input";

import { LoginWrapper, LoginForm } from './styled.js';

const Login = () => {
  const [disable, setDisabled] = useState(true );
  const [validation, setValidation] = useState(false )

  const updateData = ( value ) => {
    setDisabled( value );
  }

  return (
    <LoginWrapper>
      <LoginForm>
        <h1>Sign In</h1>

        <MainInput
          required={ true }
          type='email'
          label='Email'
          name='email'
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
