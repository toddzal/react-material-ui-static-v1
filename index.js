import React, { Component } from "react";
import { render } from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
