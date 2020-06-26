import React, { Component } from 'react';
import axios from 'axios';
import Thread from './thread';

class threads extends Component {
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
    const posts = this.state.threads.slice(-4).map((items) => {
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
    return <div className='threads'>{posts}</div>;
  }
}

export default threads;
