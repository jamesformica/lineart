import React from 'react'
import { SwatchesPicker } from 'react-color';

import styles from './Option.css';

const Option = (props) => (
  <div className={styles.option}>
    <span onClick={props.handleOpen}>{props.text}</span>
    {props.isOpen &&
      <div className={styles.picker}>
        <SwatchesPicker onChange={props.handleChange} />
      </div>
    }
  </div>
);

export default Option;
