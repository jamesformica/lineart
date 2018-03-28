import React from 'react'

import styles from './Option.css';

const Option = (props) => (
  <div className={styles.option}>
    <span className={styles.title} onClick={props.handleOpen}>{props.text}</span>
    <div className={styles.picker}>
      {props.isOpen && props.children}
    </div>
  </div>
);

export default Option;
