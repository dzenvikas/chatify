import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import store from './store';

const render = () => {
  fancyLog();
  return ReactDOM.render(<App />, document.getElementById('root'));
};
render();
store.subscribe(render);

function fancyLog() {
  console.log('%c Rendered on 🍏', 'background: #8AE17C; color: #181818');
  console.log(store.getState());
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
