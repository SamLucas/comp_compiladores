import React from 'react';
import ReactDOM from 'react-dom';

import Router from 'src/router'

import { GlobalStyle, Typography } from 'src/config/globalStyle'

const App = () => (
  <>
    <Router />
    <Typography />
    <GlobalStyle />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'));
