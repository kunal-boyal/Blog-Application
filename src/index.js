import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import reducer from "./store/reducer"

export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('blogApplication', serializedState)
  } catch (err) {
    console.log(err)
  }
};

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('blogApplication');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err)
    return undefined;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadFromLocalStorage()

const store = createStore(reducer, persistedState,composeEnhancers(applyMiddleware(thunk)))

store.subscribe(() => saveToLocalStorage(store.getState()))

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)


ReactDOM.render(app, document.getElementById('root'));