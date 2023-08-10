import React from 'react';
import { Feature } from '../../components';
import './whatGPT4.css';

const WhatGPT4 = () => {
  return (
    <div className="gpt4-whatgpt4 section_margin" id="wgpt4">
      <div className="gpt4-whatgpt4__feature">
        <Feature title="What is GPT-4" text="GPT-4 is 10 times more advanced than its predecessor, GPT-4.5. This enhancement enables the model to better understand context and distinguish nuances, resulting in more accurate and coherent responses. There are endless applications for GPT models, and you can even fine-tune them on specific data to create even better results. By using transformers, you will be saving costs on computing, time, and other resources." />
      </div>
      <div className="gpt4-whatgpt4__heading">
        <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt4-whatgpt4__container">
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments." />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments." />
      </div>
    </div>
  )
}

export default WhatGPT4