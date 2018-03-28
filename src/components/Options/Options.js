import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';
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

      <ColourOption
        text="line:colour"
        isOpen={props.isLineColourOpen}
        handleOpen={props.openLineColour}
        handleChange={props.handleLineChange}
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

      <RangeOption
        text="dot:gravity"
        min={0}
        max={0.05}
        step={0.01}
        value={props.gravity}
        isOpen={props.isGravityOpen}
        handleOpen={props.openGravity}
        handleChange={props.handleGravityChange}
      />
    </div>
  </OutSideClickHandler>
);

const mapStateToProps = state => ({
  bgColour: state.bgColour,
  dotColour: state.dotColour,
  lineColour: state.lineColour,
  dotSize: state.dotSize,
  gravity: state.gravity,
  isBgColourOpen: state.bgColourOpen,
  isDotColourOpen: state.dotColourOpen,
  isLineColourOpen: state.lineColourOpen,
  isDotSizeOpen: state.dotSizeOpen,
  isGravityOpen: state.gravityOpen,
});

const mapDispatchToProps = dispatch => ({
  openBgColour: () => dispatch(actions.openBgColour),
  openDotColour: () => dispatch(actions.openDotColour),
  openLineColour: () => dispatch(actions.openLineColour),
  openDotSize: () => dispatch(actions.openDotSize),
  openGravity: () => dispatch(actions.openGravity),
  closeAll: () => dispatch(actions.closeAll),
  handleBgChange: ({ hex }) => dispatch(actions.changeBgColour(hex)),
  handleDotChange: ({ hex }) => dispatch(actions.changeDotColour(hex)),
  handleLineChange: ({ hex }) => dispatch(actions.changeLineColour(hex)),
  handleDotSizeChange: ({ target }) => dispatch(actions.changeDotSize(target.value)),
  handleGravityChange: ({ target }) => dispatch(actions.changeGravity(target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Options);
