import React, {useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import MainInput from "../../components/input/input";
import {setUser} from "../../redux-store/action";

import {RegistrationWrapper, RegistrationForm} from './styled.js';

const Registration = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const registrationNewUser = async ( e ) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.REACT_APP_BFF_API}auth/register`, { ...form } );
      if(res.data) {
        dispatch( setUser(res.data.details) )
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <RegistrationWrapper>
      <RegistrationForm onSubmit={(e) => registrationNewUser(e)}>
        <h1>Registration</h1>

        <MainInput
          required={ true }
          type='text'
          label='username'
          name='username'
          //validation={ validation }
          updateData={ changeHandler }
        />

        <MainInput
          required={ true }
          type='email'
          label='email'
          name='email'
          //validation={ validation }
          updateData={ changeHandler }
        />

        <MainInput
          required={ true }
          type='password'
          label='password'
          name='password'
          //validation={ validation }
          updateData={ changeHandler }
        />

        <button
          type="submit"
          className='form_button'
        >
          Registration
        </button>

        <p className='registration'>Have an account? <Link to='/login'><b>Sign in.</b></Link></p>

        <Link to='/'>Come back to main page</Link>

        <small className='info_text'>
          This page is protected by Google reCAPTCHA to ensure you're not a
          bot. <b>Learn more</b>.
        </small>
      </RegistrationForm>
    </RegistrationWrapper>
  )
}

export default Registration;
