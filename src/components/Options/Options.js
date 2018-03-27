import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';
import { connect } from 'react-redux';

import { changeBgColour, changeDotColour, changeLineColour } from '../../actions';
import styles from './Options.css';

const initialState = {
  bgOpen: false,
  dotOpen: false,
  lineOpen: false
};

class Options extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.openBg = this.openBg.bind(this);
    this.openDot = this.openDot.bind(this);
    this.openLine = this.openLine.bind(this);
  }

  openBg = () => this.setState({ ...initialState, bgOpen: !this.state.bgOpen })
  openDot = () => this.setState({ ...initialState, dotOpen: !this.state.dotOpen })
  openLine = () => this.setState({ ...initialState, lineOpen: !this.state.lineOpen })

  render() {
    const { bgColour, dotColour, lineColour } = this.props;
    const { handleBgChange, handleDotChange, handleLineChange } = this.props;

    return (
      <div className={styles.options}>
        <span className={styles.option} onClick={this.openBg}>
          BG Colour
          <div className={styles.colour}>
            {this.state.bgOpen &&
              <TwitterPicker color={bgColour} onChange={handleBgChange} />
            }
          </div>
        </span>

        <span className={styles.option} onClick={this.openDot}>
          Dot Colour
          <div className={styles.colour}>
            {this.state.dotOpen &&
              <TwitterPicker color={dotColour} onChange={handleDotChange} />
            }
          </div>
        </span>

        <span className={styles.option} onClick={this.openLine}>
          Line Colour
          <div className={styles.colour}>
            {this.state.lineOpen &&
              <TwitterPicker color={lineColour} onChange={handleLineChange} />
            }
          </div>
        </span>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bgColour: state.bgColour,
  dotColour: state.dotColour,
  lineColour: state.lineColour
});

const mapDispatchToProps = dispatch => ({
  handleBgChange: ({ hex }) => dispatch(changeBgColour(hex)),
  handleDotChange: ({ hex }) => dispatch(changeDotColour(hex)),
  handleLineChange: ({ hex }) => dispatch(changeLineColour(hex))
})

export default connect(mapStateToProps, mapDispatchToProps)(Options);
