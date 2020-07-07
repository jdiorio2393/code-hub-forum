import React, { Component } from 'react';
import axios from 'axios';
import Thread from './thread';
import Sidebar from '../../layout/sidebar';

class threads extends Component {
  state = {
    threads: [],
    user: [],
  };

  componentDidMount() {
    axios.get('http://localhost:5000/get-post').then((threads) => {
      if (this.state.threads.length === 0) {
        threads.data.map((items) => {
          return this.setState({ threads: [...this.state.threads, items] });
        });
      }
    });
    axios.get('http://localhost:3000/get-user').then((user) => {
      if (this.state.user.length === 0) {
        // console.log(user.data[0].name);
        return this.setState({ user: [...this.state.user, user.data[0].name] });
      }
    });
  }

  handleDelete = (id) => {
    // e.preventDefault();
    axios.delete(`http://localhost:5000/${id}`).catch((err) => {
      console.log(err);
    });
    window.location.reload();
  };

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
          url={items.imageUrl}
          id={items._id}
          clicked={this.handleDelete}
          comment={false}
          // eslint-disable-next-line
          buttons={this.state.user == items.user ? true : false}
        />
      );
    });
    return (
      <div className='container pt-5'>
        <div className='home-container'>
          <div className='main'>{posts}</div>
          <div className='sidebar'>
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default threads;
