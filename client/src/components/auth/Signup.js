import React from 'react';

const Signup = () => {
  return (
    <div className='signup'>
      <form action='/signup' method='POST'>
        <div className='form-group'>
          <label htmlfor='nameLabel'>Username</label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
          ></input>
        </div>
        <div className='form-group'>
          <label for='exampleInputEmail1'>Email address</label>
          <input
            type='text'
            className='form-control'
            id='email'
            name='email'
            aria-describedby='emailHelp'
          ></input>
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label for='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
          ></input>
        </div>
        <div className='form-group form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
          ></input>
          <label className='form-check-label' for='exampleCheck1'>
            I agree to adhere to Code-Hub's guidelines
          </label>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
