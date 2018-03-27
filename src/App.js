import React, { Fragment } from 'react';

import Lineart from './components/Lineart/Lineart';
import Options from './components/Options/Options';

const App = () => (
  <Fragment>
    <canvas id="canvas" style={{ width: '100%', height: '100vh' }} />
    <Lineart canvasId="canvas" />
    <Options />
  </Fragment>
)

export default App;
