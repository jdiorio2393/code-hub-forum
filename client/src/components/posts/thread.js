import React, { Fragment } from 'react';

const Thread = (props) => {
  return (
    <div className='card mb-2' id={props.id} style={{ width: '98%' }}>
      <div className='card-header'>{props.user}</div>
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-text'>{props.description}</p>
        <a href='/' className='btn btn-primary'>
          Go somewhere
        </a>
        {props.buttons ? (
          <Fragment>
            <a href={`/edit/${props.id}`} className='btn btn-primary ml-2'>
              Edit Post
            </a>
            <a href='/' className='btn btn-primary ml-2'>
              Delete Post
            </a>
          </Fragment>
        ) : null}
        <p className='card-text'>{props.topic}</p>
      </div>
    </div>
  );
};

export default Thread;
