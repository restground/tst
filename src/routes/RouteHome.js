import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class RouteHome extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>home!!</h1>
        <Footer />
      </div>
    );
  }
}

export default RouteHome;