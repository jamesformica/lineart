import React from 'react';
import { connect } from 'react-redux';

import {
  changeBgColour, changeDotColour, changeLineColour,
  openBg, openDot, openLine, closeAll
} from '../../actions';
import Option from '../Option/Option';
import OutSideClickHandler from '../OutsideClickHandler/OutsideClickHandler';
import styles from './Options.css';

const Options = (props) => (
  <OutSideClickHandler handleClick={props.closeAll}>
    <div className={styles.options}>
      <Option
        text="bg:colour"
        isOpen={props.isBgOpen}
        handleOpen={props.openBg}
        handleChange={props.handleBgChange}
      />

      <Option
        text="dot:colour"
        isOpen={props.isDotOpen}
        handleOpen={props.openDot}
        handleChange={props.handleDotChange}
      />

      <Option
        text="line:colour"
        isOpen={props.isLineOpen}
        handleOpen={props.openLine}
        handleChange={props.handleLineChange}
      />
    </div>
  </OutSideClickHandler>
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
  closeAll: () => dispatch(closeAll),
  handleBgChange: ({ hex }) => dispatch(changeBgColour(hex)),
  handleDotChange: ({ hex }) => dispatch(changeDotColour(hex)),
  handleLineChange: ({ hex }) => dispatch(changeLineColour(hex))
})

export default connect(mapStateToProps, mapDispatchToProps)(Options);
