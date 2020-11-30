import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { App } from './containers/app.js';

import { comments } from './reducers';

const initialState = JSON.parse(localStorage.comments || '[]');

const store = createStore(comments, initialState);

ReactDOM.render(
    <App store={store} />,
    document.querySelector('.body')
);
