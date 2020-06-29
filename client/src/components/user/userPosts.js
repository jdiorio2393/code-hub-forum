import React, { Component } from 'react';
import axios from 'axios';
import UserPost from './userPost';

class UserPosts extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get('http://localhost:3000/user-posts').then((userPosts) => {
      if (!this.state.posts.allPosts) {
        this.setState({
          posts: [...this.state.posts, userPosts.data],
        });
      }
      // console.log(this.state.posts[0].allPosts);
      // const a = this.state.posts[0].allPosts.map((i) => console.log(i));
      // console.log(a);
      console.log(this.state.posts[0][0]);
    });
  }

  render() {
    // console.log('state' + this.state.posts);
    // const items = this.state.posts.map((posts) => {
    //   // console.log('posts' + JSON.stringify(posts));
    //   posts.allPosts.map((items) => {
    //     // console.log(items);
    //     return <h1>AHHHH</h1>;
    //   });
    // });
    // console.log(this.state);
    const allPosts = this.state.posts.map((items) => {
      return items.map((i, index) => {
        console.log(i);
        return (
          <UserPost
            key={i._id}
            title={i.title}
            description={i.description}
            topic={i.topic}
            index={index}
          />
        );
      });
    });
    return (
      <div className='random'>
        <div class='table-responsive'>
          <table class='table table-hover'>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>topic</th>
              </tr>
            </thead>
            <tbody id='items'>{allPosts}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserPosts;
