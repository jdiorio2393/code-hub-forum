import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Thread = (props) => {
  return (
    <div
      className='card mb-2'
      id={props.id}
      style={
        window.location.pathname == '/' ||
        window.location.pathname == '/view-threads'
          ? { width: '98%' }
          : { width: '100%' }
      }
    >
      <div className='card-header'>{props.user}</div>
      <div className='card-body card-grid'>
        <div>
          <h5 className='card-title'>{props.title}</h5>
          <p className='card-text'>{props.description}</p>

          <Link
            to={{
              pathname: `/${props.id}`,
              state: {
                id: props.id,
                user: props.user,
                title: props.title,
                description: props.description,
                url: props.url,
              },
            }}
            className='btn btn-primary mr-2'
          >
            View Thread
          </Link>

          {props.buttons ? (
            <Fragment>
              <Link
                to={{
                  pathname: `/edit/${props.id}`,
                  state: {
                    id: props.id,
                    user: props.user,
                    title: props.title,
                    description: props.description,
                    url: props.url,
                  },
                }}
                className='btn btn-primary mr-2'
              >
                Edit Post
              </Link>
              <form className='delete-form'>
                <input type='hidden' value={props.id} name='postId'></input>
                <a
                  onClick={() => props.clicked(props.id)}
                  className='btn btn-primary text-white'
                >
                  Delete Post
                </a>
              </form>
            </Fragment>
          ) : null}
          <p className='card-text'>{props.topic}</p>
        </div>
        <div>
          <img
            style={{ 'max-width': '100%', height: 'auto' }}
            src={
              props.imageUrl.includes('https') === true
                ? props.imageUrl
                : '/codingpic.jpg'
            }
            alt='Thread Picture'
          />
        </div>
      </div>
    </div>
  );
};

export default Thread;
