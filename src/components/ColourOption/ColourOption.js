import React from 'react'
import { SwatchesPicker } from 'react-color';

import Option from '../Option/Option';
import styles from './ColourOption.css';

const ColourOption = ({handleChange, ...rest}) => (
  <Option {...rest}>
    <SwatchesPicker className={styles.picker} onChange={handleChange} />
  </Option>
);

export default ColourOption;
