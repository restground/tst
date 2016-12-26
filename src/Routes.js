import React from 'react'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import Link from 'react-router/Link'
import Redirect from 'react-router/Redirect'
import Router from 'react-router/BrowserRouter'
import Test2 from './components/Contents/Test2'

import App from './App'

const Routes = ({ history }) => (
  <Router history={history}>
    <div>
      <Match pattern="/" exactly component={Home}/>
      <Match pattern="/willmatch" component={WillMatch}/>
      <Miss component={NoMatch} />
    </div>
  </Router>
)

const Home = () => (
	<App />
)

const WillMatch = () => {
  <App contentBody="<Test2 />" />
}

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export default Routes