import React from 'react';
import { TwitterPicker } from 'react-color';
import { connect } from 'react-redux';

import {
  changeBgColour, changeDotColour, changeLineColour,
  openBg, openDot, openLine
} from '../../actions';
import styles from './Options.css';

const Options = (props) => (
  <div className={styles.options}>
    <span className={styles.option} onClick={props.openBg}>
      BG Colour
    <div className={styles.colour}>
        {props.isBgOpen &&
          <TwitterPicker color={props.bgColour} onChange={props.handleBgChange} />
        }
      </div>
    </span>

    <span className={styles.option} onClick={props.openDot}>
      Dot Colour
    <div className={styles.colour}>
        {props.isDotOpen &&
          <TwitterPicker color={props.dotColour} onChange={props.handleDotChange} />
        }
      </div>
    </span>

    <span className={styles.option} onClick={props.openLine}>
      Line Colour
    <div className={styles.colour}>
        {props.isLineOpen &&
          <TwitterPicker color={props.lineColour} onChange={props.handleLineChange} />
        }
      </div>
    </span>
  </div>
);

const mapStateToProps = state => ({
  bgColour: state.bgColour,
  dotColour: state.dotColour,
  lineColour: state.lineColour,
  isBgOpen: state.bgOpen,
  isDotOpen: state.dotOpen,
  isLineOpen: state.lineOpen
});

const mapDispatchToProps = dispatch => ({
  openBg: () => dispatch(openBg),
  openDot: () => dispatch(openDot),
  openLine: () => dispatch(openLine),
  handleBgChange: ({ hex }) => dispatch(changeBgColour(hex)),
  handleDotChange: ({ hex }) => dispatch(changeDotColour(hex)),
  handleLineChange: ({ hex }) => dispatch(changeLineColour(hex))
})

export default connect(mapStateToProps, mapDispatchToProps)(Options);
