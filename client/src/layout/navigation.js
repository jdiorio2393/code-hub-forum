import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState('');
  const [user, setUser] = useState('');
  useEffect(() => {
    axios.get('http://localhost:3000/getSession').then((result) => {
      const auth = result.data.isLoggedin;
      if (result.data.user) {
        if (!user) {
          setUser(result.data.user);
        }
        if (!loggedIn) {
          setLoggedIn(auth);
        }
      }
      // console.log(loggedIn);
    });
  });
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          Navbar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='/'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <Link
                to={{
                  pathname: '/add',
                  state: { user },
                }}
              >
                <div className='nav-link'>Create Post</div>
              </Link>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='/view-threads'
                tabIndex='-1'
                // aria-disabled='true'
              >
                View Posts
              </a>
            </li>

            {/* <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Dropdown
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' href='#'>
                  Action
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </li> */}
          </ul>
          <ul className='navbar-nav mr-1'>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='/user'
                tabIndex='-1'
                // aria-disabled='true'
              >
                User Profile
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${loggedIn ? 'disabled hide' : ''}`}
                href='/user-login'
                tabIndex='-1'
                aria-disabled='true'
              >
                Log In
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${loggedIn ? 'disabled hide' : ''}`}
                href='/user-signup'
                tabIndex='-1'
                aria-disabled='true'
              >
                Sign Up
              </a>
            </li>
            <li className='nav-item'>
              <form action='/logout' method='POST'>
                <button
                  type='submit'
                  className={`nav-link logout ${
                    loggedIn ? '' : 'disabled hide'
                  }`}
                  tabIndex='-1'
                  aria-disabled='true'
                >
                  Log Out
                </button>
              </form>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            ></input>
            <button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
