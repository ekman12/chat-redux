// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// Reducers
import selectedChannelReducer from "./reducers/select_channel_reducer";
import setMessagesReducer from "./reducers/set_messages_reducer";


// State
const initialState = {
  // currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  currentUser: 'tomek',
  channels: ['general', 'react', 'paris'],
  selectedChannel: 'general',
  messages: [],
};

// Reducer

const reducers = combineReducers({
  selectedChannel: selectedChannelReducer,
  messages: setMessagesReducer
});

// Middleware

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
