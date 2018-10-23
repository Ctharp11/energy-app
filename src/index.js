import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
import createHistory from 'history/createBrowserHistory';

const history = createHistory()

import './styles/styles.scss';

ReactDom.render(<Router history={history}><App /></Router>, document.querySelector('#root'));
