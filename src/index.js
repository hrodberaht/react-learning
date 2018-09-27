import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';

import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const middleware = [];

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));


const AppWithProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppWithProvider />, document.getElementById('root'));
registerServiceWorker();
