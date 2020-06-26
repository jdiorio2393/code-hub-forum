import React from 'react';

const Input = (props) => {
  console.log(props.location.state.user.name);

  return (
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
        <input
          type='hidden'
          value={props.location.state.user.name}
          name='user'
        ></input>
        <button className='btn btn-primary' type='submit'>
          Create Thread
        </button>
      </form>
    </div>
  );
};

export default Input;
