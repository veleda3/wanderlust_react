import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import SearchForTripHome from './components/SearchForTripHome';

export default (
  <Route path="/" component={App}>
  <IndexRoute component={SearchForTripHome} />


  </Route>
)
