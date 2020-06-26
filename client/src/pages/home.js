import React from 'react';
import Posts from '../components/posts';
import Threads from '../components/threads';

const Home = () => {
  return (
    <div className='App'>
      <Posts />

      <Threads />
    </div>
  );
};

export default Home;
