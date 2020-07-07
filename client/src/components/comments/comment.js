import React from 'react';
// import axios from 'axios';

export const Comment = (props) => {
  //   const [comments, setComments] = useState('');
  //   useEffect(() => {
  //     if (!comments.data) {
  //       axios
  //         .get(`http://localhost:3000/comment/${props.threadId}`)
  //         .then((items) => {
  //           setComments(items);
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //     console.log(comments);
  //   }, [comments]);
  return (
    <div class='post-comment comment-grid'>
      <div className='comment-pic'>
        <div className='picture'></div>
        {/* <img
          src=''
          alt=''
          class='profile-photo-sm ml-1 mb-1'
          // style={{ 'margin-left': '1%' }}
        /> */}
      </div>
      <div className='comment-area'>
        <p>Jake Dioio</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Comment;
