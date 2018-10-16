import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ConnectedCardsDashboard from './components/CardsDashboard/CardsDashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import { fetchCards } from './actions';
import NotFound from './components/NotFound/NotFound';
import ProductsDashboard from './components/ProductsDashboard/ProductsDashboard';
import Auth from './components/Auth/Auth';


export class App extends Component {
  componentDidMount() {
    const { handleFetch } = this.props;
    handleFetch();
  }

  render() {
    return (
      <Router>
        <div className="App container">
          <Header className="Header" />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cards" component={ConnectedCardsDashboard} />
            <Route path="/products" component={ProductsDashboard} />
            <Route path="/login" component={Auth} />

            <Route component={NotFound} />
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
