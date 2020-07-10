import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Input from './components/input/input';
import Nav from './layout/navigation';
import Signup from './components/auth/Signup';
import Login from './components/auth/login';
import AllPosts from './components/posts/allPosts';
import User from './pages/User';
import Edit from './components/input/edit';
import PostPage from './pages/postPage';
import Axios from 'axios';

function App() {
  const [session, setSession] = useState('');
  useEffect(() => {
    Axios.get('http://localhost:3000/getSession').then((result) => {
      if (!session.data) {
        // Couldn't access object. (mognoose model issue?) Had to stringfiy, then parse to access.
        const x = JSON.parse(JSON.stringify(result));
        setSession(x.data.user);
        // console.log(x.data.user);
      }
    });
  });

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' render={Home} />
        <Route
          exact
          path='/add'
          render={(props) => (
            <Input {...props} user={session.name} id={session._id} />
          )}
        />
        <Route exact path='/user-signup' component={Signup} />
        <Route exact path='/user-login' component={Login} />
        <Route exact path='/view-threads' component={AllPosts} />
        <Route
          exact
          path='/user'
          render={(props) => (
            <User {...props} user={session.name} email={session.email} />
          )}
        />
        <Route exact path='/edit/:id' component={Edit} />
        <Route
          exact
          path='/:id'
          render={(props) => <PostPage {...props} user={session} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
