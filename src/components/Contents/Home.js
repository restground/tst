import React, { Component } from 'react';
import {Jumbotron, Button, Grid } from 'react-bootstrap';
import YoutubePlayer from 'react-youtube-player';

class Home extends Component {
  render() {
    return (
      <div className="page_home noscroll">
        <Jumbotron className="home_main">
          <Grid>
            <div className="home_main_text">
             <p>
               
              </p>
            </div>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;