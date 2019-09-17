import React from 'react';
import ReactDOM from 'react-dom';
import '@assets/index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';

console.log(5)
ReactDOM.render(<App />, document.getElementById('root'));
console.log(333)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
