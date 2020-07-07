import React, { Component } from 'react';
import Post from './post';
import axios from 'axios';

class Posts extends Component {
  state = {
    headlines: [],
  };

  componentDidMount() {
    // axios.get('http://localhost:5000/get-top-posts').then((threads) => {
    //   threads.data.map((items) => {
    //     return this.setState({ posts: [...this.state.posts, items] });
    //   });
    // });
    var url =
      'http://newsapi.org/v2/top-headlines?' +
      'sources=TechCrunch&' +
      // 'totalResults=4' +
      'apiKey=74e3ff8a6e6e49b0a032fb9ab12cba45';
    var req = new Request(url);
    fetch(req)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.articles);
        if (this.state.headlines.length === 0) {
          this.setState({
            headlines: [...this.state.headlines, data.articles],
          });
          console.log(this.state.headlines);
        }
      });
  }

  render() {
    const posts = this.state.headlines.map((items) => {
      return (
        <Post
          title={items.title}
          imageUrl={items.url}
          description={items.description}
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
