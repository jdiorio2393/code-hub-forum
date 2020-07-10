import React from 'react';

const Edit = (props) => {
  console.log(props.location.state.user.name);

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
        <form action='/edit-post' method='POST'>
          <label htmlFor='title'>Thread Title</label>
          <input
            required
            type='text'
            name='title'
            placeholder={props.location.state.title}
          ></input>
          <label htmlFor='imageUrl'>Image Url</label>
          <input
            required
            type='text'
            name='imageUrl'
            placeholder={props.location.state.url}
          ></input>
          <label htmlFor='description'>Thread Body</label>
          <input
            required
            type='text'
            name='description'
            placeholder={props.location.state.description}
          ></input>
          <label htmlFor='topic'>Thread Topic</label>
          <select className='select' name='topic'>
            <option>javaScript</option>
            <option>Front End</option>
            <option>Back End</option>
            <option>Machine Learning</option>
          </select>
          <input
            type='hidden'
            value={props.location.state.id}
            name='threadId'
          ></input>
          <button className='btn btn-primary' type='submit'>
            Create Thread
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
