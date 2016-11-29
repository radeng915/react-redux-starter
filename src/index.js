//import dependencies
import React from 'react';
import ReactDOM from 'react-dom';


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';

//import root reducer
import reducers from './reducers';

//import routes
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
