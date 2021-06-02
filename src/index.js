import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {yearbooks_list} from "./mocks";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App yearbooks={yearbooks_list} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
