import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt4-article">
      <div className="gpt4-article__image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt4-article__content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article