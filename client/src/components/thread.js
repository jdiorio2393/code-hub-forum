import React from 'react';

const Thread = (props) => {
  return (
    <div className='card thread'>
      <div className='card-header'>{props.user}</div>
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-text'>{props.description}</p>
        <a href='/' className='btn btn-primary'>
          Go somewhere
        </a>
        <p className='card-text'>{props.topic}</p>
      </div>
    </div>
  );
};

export default Thread;
