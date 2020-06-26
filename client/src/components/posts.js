import React, { Component } from 'react';
import Post from './post';
import axios from 'axios';

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get('http://localhost:5000/get-top-posts').then((threads) => {
      threads.data.map((items) => {
        return this.setState({ posts: [...this.state.posts, items] });
      });
      console.log(this.state);
    });
  }

  render() {
    const posts = this.state.posts.map((items) => {
      return (
        <Post
          title={items.title}
          imageUrl={items.imageUrl}
          description={items.description}
          topic={items.topic}
          key={items._id}
        />
      );
    });
    return (
      <div className='container'>
        <div className='post-container'>{posts}</div>
      </div>
    );
  }
}

export default Posts;
