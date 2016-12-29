import React, { Component } from 'react';
import './App.css';

import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
//import Link from 'react-router/Link';
//import Redirect from 'react-router/Redirect';
import Router from 'react-router/BrowserRouter';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './components/Contents/Home';
import AboutTST from './components/Contents/AboutTST';
import AboutCompany from './components/Contents/AboutCompany';
import Payment from './components/Contents/Payment';

import NoMatch from './components/Contents/NoMatch';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <Match pattern="/" exactly component={Home}/>
          <Match pattern="/about-tst" component={AboutTST}/>
          <Match pattern="/about-company" component={AboutCompany}/>
          <Match pattern="/payment" component={Payment}/>
          <Miss component={NoMatch} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;