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
    });
    var url =
      'http://newsapi.org/v2/top-headlines?' +
      'sources=bbc-news&' +
      'apiKey=74e3ff8a6e6e49b0a032fb9ab12cba45';
    var req = new Request(url);
    fetch(req).then(function (response) {
      console.log(response.json());
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
          id={items._id}
        />
      );
    });
    return (
      <div className='container'>
        <div className='featured'>Featured Today!</div>
        <div className='post-container'>{posts}</div>
      </div>
    );
  }
}

export default Posts;
