import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import App from './App';
import TodoList from './TodoList.js';

ReactDOM.render(
    <Provider store="asd">
        <TodoList />
    </Provider>, 
    document.getElementById('root')
);

