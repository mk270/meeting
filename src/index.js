import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes/Routes';
import './static/sass/styles.scss';

render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('app')
);
