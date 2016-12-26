import React, { Component } from 'react';
import './App.css';

import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
//import Link from 'react-router/Link';
//import Redirect from 'react-router/Redirect';
import Router from 'react-router/BrowserRouter';

import Home from './components/Contents/Home';
import Payment from './components/Contents/Payment';
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
          <Match pattern="/payment" component={Payment}/>
          <Miss component={NoMatch} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;