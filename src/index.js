import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>, document.getElementById('content'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
