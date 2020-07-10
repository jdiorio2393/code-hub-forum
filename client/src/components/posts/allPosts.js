import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Thread from './thread';
import Sidebar from '../../layout/sidebar';

class AllPosts extends Component {
  state = {
    threads: [],
  };

  componentDidMount() {
    axios.get('http://localhost:5000/get-post').then((threads) => {
      threads.data.map((items) => {
        return this.setState({ threads: [...this.state.threads, items] });
      });
    });
  }

  render() {
    const posts = this.state.threads.map((items) => {
      return (
        <Thread
          title={items.title}
          imageUrl={items.imageUrl}
          description={items.description}
          topic={items.topic}
          user={items.user}
          key={items._id}
        />
      );
    });
    return (
      <Fragment>
        <div style={{ backgroundColor: '#dae0e6' }}>
          <div className='threads container pt-3'>
            <div className='featured'>View All Posts</div>
            <div className='home-container'>
              <div>{posts}</div>
              <div className='sidebar'>
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AllPosts;
