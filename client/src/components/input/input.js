import React from 'react';

const Input = (props) => {
  // console.log(props.location.state.user.name);

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#dae0e6',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div className='input-container'>
        <form action='/add-post' method='POST'>
          <label htmlFor='title'>Thread Title</label>
          <input type='text' name='title'></input>
          <label htmlFor='imageUrl'>Image Url</label>
          <input type='text' name='imageUrl'></input>
          <label htmlFor='description'>Thread Body</label>
          <input type='text' name='description'></input>
          <label htmlFor='topic'>Thread Topic</label>
          <select className='select' name='topic'>
            <option>javaScript</option>
            <option>Front End</option>
            <option>Back End</option>
            <option>Machine Learning</option>
          </select>
          <input type='hidden' value={props.user} name='user'></input>
          <input type='hidden' value={props.id} name='userId'></input>
          <button className='btn btn-primary' type='submit'>
            Create Thread
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
