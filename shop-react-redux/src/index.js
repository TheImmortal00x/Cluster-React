import './main.css'

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import creareRootReducer from 'reducers';
import routes from 'routes'

const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
    creareRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)