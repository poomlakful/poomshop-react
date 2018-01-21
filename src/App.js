import React, { Component } from 'react';
import logo from './res/logo.svg';
import './res/css/App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Home from './component/Home'
import NoMatch from './component/NoMatch'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="Body">
            <div className="Nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/ContractUs">Contract Us</Link></li>
              </ul>
            </div>
            <div className="Container">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Home/:name" component={Home}/>
                <Route component={NoMatch}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
