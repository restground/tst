import React, { Component } from 'react';
import {Jumbotron, Button, Grid } from 'react-bootstrap';
import YoutubePlayer from 'react-youtube-player';

class Home extends Component {
  render() {
    return (
      <div className="page_home noscroll">
        <Jumbotron className="home_main">
         	<div className="row">
           	<div className="col-md-8">
							<Jumbotron className="home_text">
           		</Jumbotron>
						</div>
						<div className="col-md-4">
								
						</div>	
					</div>
       </Jumbotron>
      </div>
    );
  }
}

export default Home;