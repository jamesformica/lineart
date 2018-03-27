export const TOLLERANCE = 100;
const MID_TOL = TOLLERANCE * 0.85
;

class Line {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  paint(context) {
    const distance = this.getDistance();

    let colour = 'rgb(255, 255, 255)';
    if (distance > MID_TOL) {
      const blah = distance - MID_TOL;
      const a = 1 - this.mapNum(blah, 0, TOLLERANCE - MID_TOL, 0, 1);
      colour = `rgba(255, 255, 255, ${a})`;
    }

    context.beginPath();
    context.moveTo(this.x1, this.y1);
    context.lineTo(this.x2, this.y2);
    context.lineWidth = 1;
    context.strokeStyle = colour;
    context.stroke();
  }

  getDistance() {
    const a = this.x1 - this.x2;
    const b = this.y1 - this.y2;

    return Math.sqrt(a * a + b * b);
  }

  mapNum(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
}

export default Line;
