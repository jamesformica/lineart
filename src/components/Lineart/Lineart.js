import { connect } from 'react-redux';
import includes from 'lodash/includes';
import range from 'lodash/range';

import Reavas from '../Reavas/Reavas'
import Dot from './Dot';
import Line, { TOLLERANCE } from './Line';

const MAX_DOTS = 50;

class Lineart extends Reavas {
  setup(context, w, h) {
    this.dots = [];

    range(0, MAX_DOTS - 1).forEach(() => {
      this.dots.push(new Dot(w, h));
    });
  }

  paint(context, w, h) {
    const { bgColour, dotColour, lineColour, dotSize, gravity } = this.props;

    this.dots = this.removeOutOfBounds();

    range(0, MAX_DOTS - this.dots.length).forEach(() => {
      this.dots.push(new Dot(w, h));
    });

    context.beginPath();
    context.fillStyle = bgColour;
    context.fillRect(0, 0, w, h);

    this.dots.forEach(d => d.paint(context, w, h, dotColour, dotSize));
    this.findLines().forEach(d => {
      d.dot.x > d.neighbour.x ? d.dot.velocityDownX(gravity) : d.dot.velocityUpX(gravity);
      d.dot.y > d.neighbour.y ? d.dot.velocityDownY(gravity) : d.dot.velocityUpY(gravity);
      new Line(d.dot.x, d.dot.y, d.neighbour.x, d.neighbour.y).paint(context, lineColour);
    });
  }

  removeOutOfBounds = () => (
    this.dots.filter(d => this.isInside(d.x, d.y, 0, 0, this.canvas.width, this.canvas.height))
  )

  findLines = () => (
    this.dots.reduce((agg, d, index, arr) => {
      for (let i = index + 1; i < arr.length; i++) {
        const currDot = arr[i];
        if (this.isNotSelf(d, currDot) &&
          this.isNewLine(d, currDot, agg) &&
          this.isNotInTol(d, currDot)) {
          agg.push({ dot: d, neighbour: currDot });
        }
      }
      return agg;
    }, [])
  )

  isNotSelf = (d, n) => d.x !== n.x && d.y !== n.y;

  isNewLine = (d, n, agg) => !includes(agg, { dot: n, neighbour: d })

  isNotInTol = (d, n) => (
    this.isInside(n.x, n.y, d.x - TOLLERANCE, d.y - TOLLERANCE, d.x + TOLLERANCE, d.y + TOLLERANCE)
  )

  isInside = (px, py, x1, y1, x2, y2) => (
    px >= x1 &&
    py >= y1 &&
    px <= x2 &&
    py <= y2
  )
}

const mapStateToProps = state => ({
  bgColour: state.bgColour,
  dotColour: state.dotColour,
  lineColour: state.lineColour,
  dotSize: state.dotSize,
  gravity: state.gravity
});

export default connect(mapStateToProps)(Lineart);
