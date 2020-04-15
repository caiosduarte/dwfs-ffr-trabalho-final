import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// rotas
import { BrowserRouter } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { points } from './reducers/pointReducer'

const store = createStore(
    points,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
