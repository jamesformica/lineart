import React, { Component, Fragment } from 'react';

import Lineart from './components/Lineart/Lineart';

class App extends Component {
  render() {
    return (
      <Fragment>
        <canvas id="canvas" style={{ width: '100%', height: '100vh' }} />
        <Lineart canvasId="canvas" />
      </Fragment>
    );
  }
}

export default App;
