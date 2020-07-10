import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sidebar = () => {
  const [topics, setTopic] = useState([]);
  useEffect(() => {
    if (topics.length === 0) {
      axios.get('http://localhost:3000/count-posts').then((result) => {
        setTopic(result.data);
      });
    }
  });

  return (
    <ul className='list-group sidebar'>
      <li className='list-group-item text-muted'>Topics</li>
      <li className='list-group-item'>
        Front End <span className='pull-right'>{topics[1]}</span>
      </li>
      <li className='list-group-item'>
        Back End <span className='pull-right'>{topics[2]}</span>
      </li>
      <li className='list-group-item'>
        Javascript <span className='pull-right'>{topics[0]}</span>
      </li>
      <li className='list-group-item'>
        Machine Learning <span className='pull-right'>{topics[3]}</span>
      </li>
    </ul>
  );
};

export default Sidebar;
