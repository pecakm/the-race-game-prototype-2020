import React from 'react';
import ReactDOM from 'react-dom';
import './theme/global.css';
import World from './components/World/World.component';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <World />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
