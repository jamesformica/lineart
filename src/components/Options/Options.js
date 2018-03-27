import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';

import styles from './Options.css';

class Options extends Component {
  render() {
    return (
      <div className={styles.options}>
        <span className={styles.option}>BG Colour</span>
        <span className={styles.option}>Dot Colour</span>
        <span className={styles.option}>Line Colour</span>
      </div>
    )
  }
}

export default Options;
