import Reavas from '../Reavas/Reavas'
import includes from 'lodash/includes';
import range from 'lodash/range';

import Dot from './Dot';
import Line, { TOLLERANCE } from './Line';

const MAX_DOTS = 50;

class Lineart extends Reavas {
  setup(context, w, h) {
    this.bg = 'black';
    this.dots = [];

    range(0, MAX_DOTS - 1).forEach(() => {
      this.dots.push(new Dot(w, h));
    });
  }

  paint(context, w, h) {
    this.dots = this.removeOutOfBounds();

    range(0, MAX_DOTS - this.dots.length).forEach(() => {
      this.dots.push(new Dot(w, h));
    });

    context.beginPath();
    context.fillStyle = this.bg;
    context.fillRect(0, 0, w, h);

    this.dots.forEach(d => d.paint(context, w, h));
    this.findLines().forEach(d => {
      d.dot.x > d.neighbour.x ? d.dot.velocityDownX() : d.dot.velocityUpX();
      d.dot.y > d.neighbour.y ? d.dot.velocityDownY() : d.dot.velocityUpY();
      new Line(d.dot.x, d.dot.y, d.neighbour.x, d.neighbour.y).paint(context);
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

export default Lineart;
