import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App';
import SearchForTripHome from '../components/SearchForTripHome';
import NewTrip from '../components/NewTrip';
import SignupPage from '../components/signup/SignupPage'

export default (
  <Route path="/" component={App}>
  <IndexRoute component={SearchForTripHome} />
  <Route path="trips/new" component={NewTrip} />
  <Route path="signup" component={SignupPage} />


  </Route>
)
