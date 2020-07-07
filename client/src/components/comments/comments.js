import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './comment';

export const Comments = (props) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (comments.length === 0) {
      axios
        .get(`http://localhost:3000/comment/${props.threadId}`)
        .then((items) => {
          setComments(items.data);
        })
        .catch((err) => console.log(err));
    }
    // console.log(comments);
    // setTimeout(() => {
    //   comments.map((result) => console.log(result));
    // }, 2000);
  });

  const items = comments.map((items) => {
    return (
      <Comment
        description={items.description}
        postid={items.post}
        user={items.user}
      />
    );
  });
  return (
    <div className='card pull-right '>
      {/* <div className='card-header'></div> */}
      <div className='card-body comment-body '>{items}</div>
    </div>
  );
};

export default Comments;
