import { connect } from 'react-redux';
import includes from 'lodash/includes';
import range from 'lodash/range';
import random from 'lodash/random';

import Reavas from '../Reavas/Reavas'
import Dot from './Dot';
import Line, { TOLLERANCE } from './Line';

class Lineart extends Reavas {
  setup(canvas) {
    this.dots = [];
    this.maxDots = canvas.width / 2 / 10;

    this.attachEvents(canvas);
    this.buildInitialDots(canvas.width, canvas.height);
  }

  paint(canvas, context) {
    const { bgColour, dotColour, lineColour, dotSize, gravity } = this.props;
    const { width: w, height: h } = canvas;

    this.removeOutOfBounds();
    this.buildNewDots(w, h);

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

  attachEvents(canvas) {
    canvas.onclick = e => {
      range(0, random(2, 4)).forEach(() => {
        const dot = new Dot({ x: e.clientX, y: e.clientY });
        this.dots.push(dot);
      });
    }
  }

  buildInitialDots(w, h) {
    range(0, this.maxDots - 1).forEach(() => {
      const dot = new Dot({ w, h, rand: true });
      this.dots.push(dot);
    });
  }

  buildNewDots(w, h) {
    const newDotCount = Math.max(this.maxDots - this.dots.length, 0);
    range(0, newDotCount).forEach(() => {
      const dot = new Dot({ w, h, rand: false });
      this.dots.push(dot);
    });
  }

  removeOutOfBounds = () => (
    this.dots = this.dots.filter(d =>
      this.isInside(d.x, d.y, 0, 0, this.canvas.width, this.canvas.height)
    )
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
