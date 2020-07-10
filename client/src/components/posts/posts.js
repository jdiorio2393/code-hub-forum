import React, { Component } from 'react';
import Post from './post';
import axios from 'axios';

class Posts extends Component {
  state = {
    headlines: [],
  };

  componentDidMount() {
    var url =
      'http://newsapi.org/v2/top-headlines?' +
      'sources=TechCrunch&' +
      // 'pageSize=4' +
      'apiKey=74e3ff8a6e6e49b0a032fb9ab12cba45';
    var req = new Request(url);
    fetch(req)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.articles);
        if (this.state.headlines.length === 0) {
          this.setState({
            headlines: [...this.state.headlines, data.articles],
          });
          this.state.headlines.map((items) => {
            items.map((news) => {
              console.log(news);
            });
          });
        }
      });
  }

  render() {
    const posts = this.state.headlines.map((news) => {
      return news.slice(0, 4).map((items) => {
        return (
          <Post
            title={items.title}
            imageUrl={items.urlToImage}
            url={items.url}
            description={items.description}
            key={items._id}
            id={items._id}
          />
        );
      });
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
