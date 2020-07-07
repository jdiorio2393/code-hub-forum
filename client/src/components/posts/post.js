import React from 'react';

const post = (props) => {
  return (
    <div
      className='card grid-card'
      // id={props.id.substring(0, 5)}
      style={{ width: '16rem' }}
    >
      <img className='card-img-top' src='/coding.jpg' alt='Thread Img'></img>
      <div className='card-body text-center'>
        <h5 className='card-title text-center'>{props.title}</h5>
        <p className='card-text text-center'>{props.description}</p>
        <p className='card-text text-center'>{props.topic}</p>
        <a href='/' className='btn btn-primary text-center'>
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default post;
