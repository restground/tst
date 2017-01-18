import React, { Component } from 'react';
import {Jumbotron, Button, Grid } from 'react-bootstrap';
import YoutubePlayer from 'react-youtube-player';

class Home extends Component {
  render() {
    return (
      <div className="page_home noscroll">
        <Jumbotron className="home_main">
         	<div className="row">
           	<div className="col-md-7">
							<Jumbotron className="home_text">
           		</Jumbotron>
						</div>
						<div className="col-md-5 youtube_player">
								<YoutubePlayer 
                    videoId='MyC67-LBtO4' 
                    width='480'
                    height='270'                    
                    playbackState='unstarted'
                    configuration={
                      {
                        rel:0,
                        showinfo:1
                      }
                    }
                  />
						</div>	
					</div>
       </Jumbotron>
      </div>
    );
  }
}

export default Home;