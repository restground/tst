import React, { Component } from 'react';
import {Grid} from 'react-bootstrap'

class NoMatch extends Component {
  render() {
    return (
      <div className="page_404">
        <Grid>
          <h1>404 Error! No Match for <code>{location.pathname}</code></h1>
        </Grid>
      </div>
    );
  }
}

export default NoMatch;