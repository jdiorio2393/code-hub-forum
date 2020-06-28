import React from 'react';
import Posts from '../components/posts/posts';
import Threads from '../components/posts/threads';

const Home = () => {
  return (
    <div className='App'>
      <Posts />

      <Threads />
    </div>
  );
};

export default Home;
