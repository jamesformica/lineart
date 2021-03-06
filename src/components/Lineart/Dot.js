import sample from 'lodash/sample';
import random from 'lodash/random';

const SIDES = ["TOP", "LEFT", "RIGHT", "BOTTOM"];

class Dot {
  constructor(options) {
    this.velocity = { x: 0, y: 0 };

    const { x, y, w, h, rand } = options;
    if (x && y) {
      this.setMousePosition(x, y);
    } else {
      this.setStartPosition(w, h, rand);
    }

    const radA = this.a * Math.PI / 180;
    this.velocity.x += Math.sin(-radA);
    this.velocity.y += Math.cos(radA);
  }

  setMousePosition(x, y) {
    this.x = x;
    this.y = y;
    this.a = random(0, 360);
  }

  setStartPosition(w, h, rand) {
    switch (sample(SIDES)) {
      case "TOP":
        this.x = random(0, w);
        this.y = rand ? random(0, h / 2) : 0;
        this.a = random(180, 360);
        break;
      case "LEFT":
        this.x = rand ? random(0, w / 2) : 0;
        this.y = random(0, h);
        this.a = random(270, 540) % 360;
        break;
      case "RIGHT":
        this.x = rand ? random(w / 2, w) : w;
        this.y = random(0, h);
        this.a = random(90, 270);
        break;
      case "BOTTOM":
        this.x = random(0, w);
        this.y = rand ? random(h / 2, h) : h;
        this.a = random(0, 180);
        break;
      default:
        break;
    }
  }

  paint(context, w, h, colour, size) {
    context.beginPath();
    context.fillStyle = colour;
    context.arc(this.x, this.y, size, 0, 2 * Math.PI);
    context.fill();

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  velocityUpX(gravity) {
    this.velocity.x = Math.min(this.velocity.x + gravity, 1.5);
  }

  velocityDownX(gravity) {
    this.velocity.x = Math.max(this.velocity.x - gravity, -1.5);
  }

  velocityUpY(gravity) {
    this.velocity.y = Math.min(this.velocity.y + gravity, 1.5);
  }

  velocityDownY(gravity) {
    this.velocity.y = Math.max(this.velocity.y - gravity, -1.5);
  }
}

export default Dot;