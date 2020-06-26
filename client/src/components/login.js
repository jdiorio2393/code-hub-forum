import React from 'react';

const login = () => {
  return (
    <form action='/login' method='POST'>
      <div class='form-group'>
        <label for='exampleInputEmail1'>Email address</label>
        <input
          type='email'
          class='form-control'
          id='exampleInputEmail1'
          name='email'
        ></input>
      </div>
      <div class='form-group'>
        <label for='exampleInputPassword1'>Password</label>
        <input
          type='password'
          class='form-control'
          id='exampleInputPassword1'
          name='password'
        ></input>
      </div>
      <div class='form-group form-check'>
        <input
          type='checkbox'
          class='form-check-input'
          id='exampleCheck1'
        ></input>
      </div>
      <button type='submit' class='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default login;
