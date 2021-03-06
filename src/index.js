import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/store';
const reduxStore = configureStore();
window.webBase = "https://www.mooooon333.cn:5000/";
ReactDOM.render(<Root store={reduxStore}/>, document.getElementById('root'));
//ReactDOM.render(<Root/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
