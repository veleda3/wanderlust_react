import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import {Router, browserHistory} from 'react-router';
import routes from './util/routes';

const logger = createLogger();
const store = createStore(
    allReducers,
    compose(
      applyMiddleware(thunk, promise, logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

ReactDOM.render(
    <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);
