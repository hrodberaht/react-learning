import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.css';
import CardsDashboard from './components/CardsDashboard/CardsDashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import { fetchCards } from './actions';


export class App extends Component {
  componentDidMount() {
    const { handleFetch } = this.props;
    handleFetch();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cards" component={CardsDashboard} />
            <Route component={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  handleFetch: PropTypes.func.isRequired,
};

export default connect(null, { handleFetch: fetchCards })(App);
