import React from 'react';

import { FooterWrapper, FooterItem } from './styled.js';
import { Facebook, Instagram, Twitter, Youtube } from '../../constants/icons';

const Footer = () => {
  return (
    <div className='container'>
      <FooterWrapper>
        <div className="top_row">
          <FooterItem>
            <li><a href="/" className="social_icon"><img src={ Facebook } alt="icon"/></a></li>
            <li><a href="/" className="social_icon"><img src={ Instagram } alt="icon"/></a></li>
            <li><a href="/" className="social_icon"><img src={ Twitter } alt="icon"/></a></li>
            <li><a href="/" className="social_icon"><img src={ Youtube } alt="icon"/></a></li>
          </FooterItem>

          <FooterItem/>

          <FooterItem/>

          <FooterItem/>
        </div>

        <div className="bottom_row">
          <FooterItem>
            <li><a className='bottom_link' href="/">FAQ</a></li>
            <li><a className='bottom_link' href="/">Investor Relations</a></li>
            <li><a className='bottom_link' href="/">Ways to Watch</a></li>
            <li><a className='bottom_link' href="/">Corporate Information</a></li>
            <li><a className='bottom_link' href="/">Only on Netflix</a></li>
          </FooterItem>

          <FooterItem>
            <li><a className='bottom_link' href="/">Help Center</a></li>
            <li><a className='bottom_link' href="/">Jobs</a></li>
            <li><a className='bottom_link' href="/">Terms of Use</a></li>
            <li><a className='bottom_link' href="/">Contact Us</a></li>
          </FooterItem>

          <FooterItem>
            <li><a className='bottom_link' href="/">Account</a></li>
            <li><a className='bottom_link' href="/">Redeem Gift Cards</a></li>
            <li><a className='bottom_link' href="/">Privacy</a></li>
            <li><a className='bottom_link' href="/">Speed test</a></li>
          </FooterItem>

          <FooterItem>
            <li><a className='bottom_link' href="/">Privacy</a></li>
            <li><a className='bottom_link' href="/">Buy Gift Cards</a></li>
            <li><a className='bottom_link' href="/">Cookie Preferences</a></li>
            <li><a className='bottom_link' href="/">Legal Notices</a></li>
          </FooterItem>
        </div>
      </FooterWrapper>
    </div>
  )
}

export default Footer;
