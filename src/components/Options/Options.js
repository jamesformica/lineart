import React from 'react';
import { connect } from 'react-redux';

import {
  changeBgColour, changeDotColour, changeLineColour, changeDotSize,
  openBgColour, openDotColour, openLineColour, openDotSize, closeAll
} from '../../actions';
import ColourOption from '../ColourOption/ColourOption';
import RangeOption from '../RangeOption/RangeOption';
import OutSideClickHandler from '../OutsideClickHandler/OutsideClickHandler';
import styles from './Options.css';

const Options = (props) => (
  <OutSideClickHandler handleClick={props.closeAll}>
    <div className={styles.options}>
      <ColourOption
        text="bg:colour"
        isOpen={props.isBgColourOpen}
        handleOpen={props.openBgColour}
        handleChange={props.handleBgChange}
      />

      <ColourOption
        text="dot:colour"
        isOpen={props.isDotColourOpen}
        handleOpen={props.openDotColour}
        handleChange={props.handleDotChange}
      />

      <RangeOption
        text="dot:size"
        min={0}
        max={5}
        step={0.5}
        value={props.dotSize}
        isOpen={props.isDotSizeOpen}
        handleOpen={props.openDotSize}
        handleChange={props.handleDotSizeChange}
      />

      <ColourOption
        text="line:colour"
        isOpen={props.isLineColourOpen}
        handleOpen={props.openLineColour}
        handleChange={props.handleLineChange}
      />
    </div>
  </OutSideClickHandler>
);

const mapStateToProps = state => ({
  bgColour: state.bgColour,
  dotColour: state.dotColour,
  lineColour: state.lineColour,
  dotSize: state.dotSize,
  isBgColourOpen: state.bgColourOpen,
  isDotColourOpen: state.dotColourOpen,
  isLineColourOpen: state.lineColourOpen,
  isDotSizeOpen: state.dotSizeOpen,
});

const mapDispatchToProps = dispatch => ({
  openBgColour: () => dispatch(openBgColour),
  openDotColour: () => dispatch(openDotColour),
  openLineColour: () => dispatch(openLineColour),
  openDotSize: () => dispatch(openDotSize),
  closeAll: () => dispatch(closeAll),
  handleBgChange: ({ hex }) => dispatch(changeBgColour(hex)),
  handleDotChange: ({ hex }) => dispatch(changeDotColour(hex)),
  handleLineChange: ({ hex }) => dispatch(changeLineColour(hex)),
  handleDotSizeChange: ({ target }) => dispatch(changeDotSize(target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Options);
