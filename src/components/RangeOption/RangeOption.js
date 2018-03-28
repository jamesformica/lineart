import React from 'react';

import Option from '../Option/Option';
import styles from './RangeOption.css';

const RangeOption = ({ min, max, step, value, handleChange, ...rest }) => (
  <Option {...rest}>
    <div className={styles.wrapper}>
      <span>{value}</span>
      <input
        className={styles.slider}
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={value}
        onChange={handleChange}
      />
    </div>
  </Option>
)

export default RangeOption;
