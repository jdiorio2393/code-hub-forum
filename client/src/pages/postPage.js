import React, { useState, useEffect } from 'react';
import Thread from '../components/posts/thread';
import Comments from '../components/comments/comments';

const PostPage = (props) => {
  const [user, setUser] = useState('');
  useEffect(() => {
    if (!user.name) {
      setUser(props.user);
    }
  });
  return (
    <div className='container mt-5'>
      <Thread
        id={props.location.state.id}
        user={props.location.state.user}
        title={props.location.state.title}
        description={props.location.state.description}
        comment={true}
      />
      <Comments threadId={props.location.state.id} />
      <form action='/add-comment' method='POST'>
        <div class='post-comment'>
          <img src='images/users/user-1.jpg' alt='' class='profile-photo-sm' />
          <input type='hidden' value={user} name='user' />
          <input
            type='hidden'
            value={props.location.state.id}
            name='threadId'
          />
          <input
            type='text'
            class='form-control'
            placeholder='Post a comment'
            name='description'
          ></input>
          <button className='btn btn-primary' type='submit'>
            Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostPage;
