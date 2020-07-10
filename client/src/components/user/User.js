import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import UserPosts from './userPosts';

const UserProfile = (props) => {
  return (
    // Left profile table
    <div className='container'>
      <div className='top-area'>
        <div className='username'>
          {' '}
          <h1>{props.user}</h1>
        </div>
        <div>
          <img
            className='profile-pic'
            src='https://www.clipartmax.com/png/middle/318-3182943_admin-blank-user-profile.png'
            alt='User Picture'
          />
        </div>
      </div>
      <div className='user-container'>
        <div className='top'>
          <ul className='list-group'>
            <li className='list-group-item text-muted'>Profile</li>
            <li className='list-group-item'>
              Joined <span className='pull-right'>7/9/20</span>
            </li>
            <li className='list-group-item'>
              Username <span className='pull-right'>{props.user}</span>
            </li>
            <li className='list-group-item'>
              Email <span className='pull-right'>{props.email}</span>
            </li>
          </ul>

          {/* activity table */}

          <ul className='list-group pt-3'>
            <li className='list-group-item text-muted'>
              Activity <i className='fa fa-dashboard fa-1x'></i>
            </li>
            <li className='list-group-item text-right'>
              <span className='pull-left'>
                <strong>Shares</strong>
              </span>{' '}
              125
            </li>
            <li className='list-group-item text-right'>
              <span className='pull-left'>
                <strong>Likes</strong>
              </span>{' '}
              13
            </li>
            <li className='list-group-item text-right'>
              <span className='pull-left'>
                <strong>Posts</strong>
              </span>{' '}
              37
            </li>
            <li className='list-group-item text-right'>
              <span className='pull-left'>
                <strong>Followers</strong>
              </span>{' '}
              78
            </li>
          </ul>
        </div>

        {/* main profile area */}
        <div className='profile'>
          <Tabs defaultActiveKey='Home' id='uncontrolled-tab-example'>
            <Tab eventKey='Home' title='Home'>
              <UserPosts />
            </Tab>
            <Tab eventKey='Messages' title='Messages'>
              ...
            </Tab>
            <Tab eventKey='Settings' title='Settings' disabled>
              ...
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
