import React from 'react';

const post = (props) => {
  return (
    <div
      className='card grid-card'
      // id={props.id.substring(0, 5)}
      style={{ width: '16rem', backgroundColor: 'black', maxHeight: '180px' }}
    >
      <a href={props.url} target='_blank' rel='noopener noreferrer'>
        {/* <img className='card-img-top' src='/coding.jpg' alt='Thread Img'></img>
      <div className='card-body text-center'>
        <h5 className='card-title text-center'>{props.title}</h5>
        <p className='card-text text-center'>{props.description}</p>
        <p className='card-text text-center'>{props.topic}</p>
        <a href='/' className='btn btn-primary text-center'>
          Go somewhere
        </a>
      </div> */}
        {/* ----------------- */}
        {/* <div className='card bg-dark text-white' style={{ objectFit: 'contain' }}> */}
        <img
          src={props.imageUrl}
          style={{
            objectFit: 'cover',
            minHeight: '180px',
            maxHeight: '180px',
            opacity: '.4',
          }}
          className='card-img'
          alt='...'
        />
        <div className='card-img-overlay text-white'>
          <h5
            className='card-title'
            // style={{ position: 'absolute', transform: 'translate(0%, 25%)' }}
          >
            {props.title}
          </h5>
          <p className='card-text'></p>
          {/* <p className='card-text'>{props.topic}</p> */}
        </div>
        {/* </div> */}
      </a>
    </div>
  );
};

export default post;
