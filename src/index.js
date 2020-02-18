import React from 'react';
import ReactDOM from 'react-dom';
import Fixfordesfix from './App';

import { GlobalStyle, Typography } from 'src/config/globalStyle'

const App = () => (
  <>
    <Typography />
    <GlobalStyle />
    <Fixfordesfix />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'));
