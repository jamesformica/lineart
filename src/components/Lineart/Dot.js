import sample from 'lodash/sample';
import random from 'lodash/random';

const SIDES = ["TOP", "LEFT", "RIGHT", "BOTTOM"];

class Dot {
  constructor(w, h) {
    this.velocity = { x: 0, y: 0 };

    switch (sample(SIDES)) {
      case "TOP":
        this.x = random(0, w);
        this.y = random(0, h / 2);
        this.a = random(180, 360);
        break;
      case "LEFT":
        this.x = random(0, w / 2);
        this.y = random(0, h);
        this.a = random(270, 540) % 360;
        break;
      case "RIGHT":
        this.x = random(w / 2, w);
        this.y = random(0, h);
        this.a = random(90, 270);
        break;
      case "BOTTOM":
        this.x = random(0, w);
        this.y = random(h / 2, h);
        this.a = random(0, 180);
        break;
      default:
        break;
    }

    const radA = this.a * Math.PI / 180;
    this.velocity.x += Math.sin(-radA);
    this.velocity.y += Math.cos(radA);
  }

  paint(context, w, h) {
    context.beginPath();
    context.fillStyle = "white";
    context.arc(this.x, this.y, 1.5, 0, 2 * Math.PI);
    context.fill();

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  velocityUpX() {
    this.velocity.x = Math.min(this.velocity.x + 0.01, 1.5);
  }

  velocityDownX() {
    this.velocity.x = Math.max(this.velocity.x - 0.01, -1.5);
  }

  velocityUpY() {
    this.velocity.y = Math.min(this.velocity.y + 0.01, 1.5);
  }

  velocityDownY() {
    this.velocity.y = Math.max(this.velocity.y - 0.01, -1.5);
  }
}

export default Dot;