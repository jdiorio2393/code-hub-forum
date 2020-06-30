import React from 'react';

const Sidebar = () => {
  return (
    <ul className='list-group'>
      <li className='list-group-item text-muted'>Topics</li>
      <li className='list-group-item'>
        Front End <span className='pull-right'>Click Here</span>
      </li>
      <li className='list-group-item'>
        Back End <span className='pull-right'>Click Here</span>
      </li>
      <li className='list-group-item'>
        Javascript <span className='pull-right'>Click Here</span>
      </li>
      <li className='list-group-item'>
        Machine Learning <span className='pull-right'>Click Here</span>
      </li>
    </ul>
  );
};

export default Sidebar;
