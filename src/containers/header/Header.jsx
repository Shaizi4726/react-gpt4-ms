import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt4-header section_padding" id="home">
      <div className="gpt4-header__content">
        <h1 className="gradient-text">Let's Build Something amazing about GPT-4 OpenAI</h1>
        <p>GPT-4 is more creative and collaborative than ever before. It can generate, edit, and iterate with users on creative and technical writing tasks, such as composing songs, writing screenplays, or learning a user’s writing style.</p>

        <div className="gpt4-header__content-input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt4-header__content-people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt4-header__image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
