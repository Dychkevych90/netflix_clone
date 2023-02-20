import styled from "styled-components";

import Bg from '../../media/background.jpg';

const RegistrationWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url('${ Bg }') center no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.5);
  }
`

const RegistrationForm = styled.form`
  background: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  max-width: 450px;
  z-index: 10;
  padding: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 41px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    margin-bottom: 28px;
  }
  
  .form_button {
    background: #E50914;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.55);
    border-radius: 4px;
    width: 100%;
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #FFFFFF;
    padding: 16px 0;
    margin-top: 58px;
  }
  
  .info_text {
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.005em;
    color: #8C8C8C;
    margin-top: 14px;
  }
  
  .registration {
    margin-top: 46px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #737373;
    
    a {
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export {
  RegistrationWrapper,
  RegistrationForm
}
