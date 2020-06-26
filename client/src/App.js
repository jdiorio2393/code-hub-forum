import React from 'react';
import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Input from './components/input';
import Nav from './layout/navigation';
import Signup from './components/Signup';
import Login from './components/login';
import AllPosts from './components/allPosts';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' render={Home} />
        <Route exact path='/add' component={Input} />
        <Route exact path='/user-signup' component={Signup} />
        <Route exact path='/user-login' component={Login} />
        <Route exact path='/view-threads' component={AllPosts} />
      </Switch>
    </Router>
  );
}

export default App;
