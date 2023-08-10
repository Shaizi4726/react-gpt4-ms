import React from 'react';
import gpt4Logo from '../../assets/logo.svg'
import './footer.css';

const Footer = () => {
  return (
    <div className="gpt4-footer section_padding">
      <div className="gpt4-footer__heading">
        <h1 className="gradient-text">Do you want to step in to the future before others</h1>
      </div>
      <div className="gpt4-footer__btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt4-footer__links">
        <div className="gpt4-footer__links-logo">
          <img src={gpt4Logo} alt="logo" />
          <p>Abu Hail Dubai, United Arab Emirates, All Rights Reserved</p>
        </div>
        <div className="gpt4-footer__links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt4-footer__links-div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt4-footer__links-div">
          <h4>Get in touch</h4>
          <p>Abu Hail Duabi, United Arab Emirates</p>
          <p>050-1234567</p>
          <p>malikshahzad4726@gmail.com</p>
        </div>
      </div>
      <div className="gpt4-footer__copyright">
        <p>© 2023 Malik Shahzad. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
