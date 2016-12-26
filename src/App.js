import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
import Link from 'react-router/Link';
import Redirect from 'react-router/Redirect';
import Router from 'react-router/BrowserRouter';

import Home from './components/Contents/Home';
import NoMatch from './components/Contents/NoMatch';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <Match pattern="/" exactly component={Home}/>
          <Match pattern="/will-match" component={WillMatch}/>
          <Miss component={NoMatch} />
          <Footer />
        </div>
      </Router>
    );
  }
}


const WillMatch = () => (
  <div>
    <h1>Matched!</h1>
  </div>
);



export default App;